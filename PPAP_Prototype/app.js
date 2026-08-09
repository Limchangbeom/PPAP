const form = document.getElementById("diagnostic-form");
const resultPanel = document.getElementById("result-panel");
const sampleButton = document.getElementById("sample-button");
const resetButton = document.getElementById("reset-button");

const RIGHT_LABELS = {
  access: "열람/접근",
  correction: "정정",
  deletion: "삭제",
  suspension: "처리정지",
  portability: "전송권",
  objection: "이의제기",
  withdrawal: "동의철회",
  optout: "판매/공유 거부",
};

const SAMPLE_DATA = {
  companyName: "OrbitNow",
  policyText: "회사는 이름, 이메일, 접속 로그를 수집하여 회원관리와 서비스 개선에 활용합니다. 이용자는 열람 및 삭제를 요청할 수 있습니다. 쿠키를 활용한 맞춤형 광고가 포함될 수 있습니다.",
  dataCategories: "이름\n이메일\n휴대전화\n접속 로그\n쿠키 식별자",
  purposes: "회원가입\n고객지원\n서비스 개선\n마케팅",
  retentionDisclosure: "partial",
  thirdPartySharing: "yes",
  outsourcing: "yes",
  crossBorderTransfer: "yes",
  crossBorderMechanism: "unknown",
  lawfulBasisMapped: "no",
  consentCollection: "partial",
  consentThirdParty: "no",
  consentCrossBorder: "no",
  consentMarketing: "no",
  noticeAtCollection: "partial",
  sellShareOptOut: "no",
  sellShareData: "yes",
  gpcSupport: "no",
  minorsHandling: "under16",
  parentalProcess: "no",
  cookiesUsage: "ads",
  cookieConsent: "no",
  automatedDecision: "yes",
  automatedDisclosure: "no",
  markets: ["kr", "eu", "ca"],
  rights: ["access", "deletion"],
};

const STATUS_VALUE = {
  good: 1,
  warn: 0.5,
  risk: 0,
};

const STATUS_LABEL = {
  good: "양호",
  warn: "보완 필요",
  risk: "우선 보완",
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readForm();
  const scan = scanPolicyText(data.policyText);
  const diagnostics = buildDiagnostics(data, scan);
  renderResults(data, scan, diagnostics);
});

sampleButton.addEventListener("click", () => {
  fillSample();
  form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
});

resetButton.addEventListener("click", () => {
  window.setTimeout(() => {
    ensureDefaultMarkets();
    renderEmpty();
  }, 0);
});

ensureDefaultMarkets();

function ensureDefaultMarkets() {
  const marketInputs = [...form.querySelectorAll('input[name="markets"]')];
  if (!marketInputs.some((input) => input.checked)) {
    marketInputs.forEach((input) => {
      input.checked = true;
    });
  }
}

function readForm() {
  return {
    companyName: form.companyName.value.trim() || "입력한 회사",
    markets: checkedValues("markets"),
    policyText: form.policyText.value.trim(),
    dataCategories: splitList(form.dataCategories.value),
    purposes: splitList(form.purposes.value),
    retentionDisclosure: form.retentionDisclosure.value,
    thirdPartySharing: form.thirdPartySharing.value,
    outsourcing: form.outsourcing.value,
    crossBorderTransfer: form.crossBorderTransfer.value,
    crossBorderMechanism: form.crossBorderMechanism.value,
    lawfulBasisMapped: form.lawfulBasisMapped.value,
    consentCollection: form.consentCollection.value,
    consentThirdParty: form.consentThirdParty.value,
    consentCrossBorder: form.consentCrossBorder.value,
    consentMarketing: form.consentMarketing.value,
    noticeAtCollection: form.noticeAtCollection.value,
    sellShareOptOut: form.sellShareOptOut.value,
    sellShareData: form.sellShareData.value,
    gpcSupport: form.gpcSupport.value,
    minorsHandling: form.minorsHandling.value,
    parentalProcess: form.parentalProcess.value,
    cookiesUsage: form.cookiesUsage.value,
    cookieConsent: form.cookieConsent.value,
    automatedDecision: form.automatedDecision.value,
    automatedDisclosure: form.automatedDisclosure.value,
    rights: checkedValues("rights"),
  };
}

function checkedValues(name) {
  return [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function splitList(value) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function scanPolicyText(text) {
  const has = (patterns) => patterns.some((pattern) => pattern.test(text));
  return {
    hasText: text.trim().length > 0,
    retention: has([/보유기간/i, /파기/i, /retention/i, /storage period/i]),
    thirdParty: has([/제3자/i, /제공받/i, /third party/i, /recipient/i]),
    crossBorder: has([/국외이전/i, /해외\s*이전/i, /cross-border/i, /international transfer/i, /third country/i]),
    rights: has([/열람/i, /정정/i, /삭제/i, /처리정지/i, /이의제기/i, /access/i, /erasure/i, /portability/i, /opt-?out/i]),
    cookies: has([/쿠키/i, /cookie/i, /픽셀/i, /pixel/i, /행태정보/i, /tracking/i]),
    minors: has([/아동/i, /만\s*14세/i, /16세/i, /child/i, /minor/i]),
    optOut: has([/옵트아웃/i, /거부/i, /do not sell/i, /do not share/i]),
    lawfulBasis: has([/법적\s*근거/i, /정당한\s*이익/i, /동의/i, /계약/i, /legal basis/i, /legitimate interest/i, /consent/i, /contract/i]),
    noticeAtCollection: has([/수집.*목적/i, /수집.*항목/i, /categories of personal information/i, /point of collection/i]),
  };
}

function buildDiagnostics(data, scan) {
  return [
    buildKoreaDiagnostics(data, scan),
    buildGdprDiagnostics(data, scan),
    buildCcpaDiagnostics(data, scan),
  ];
}

function buildKoreaDiagnostics(data, scan) {
  const items = [];
  const usesMarketing = data.purposes.some((purpose) => /마케팅|광고|프로모션|뉴스레터|marketing/i.test(purpose));

  if (!data.dataCategories.length || !data.purposes.length) {
    items.push(makeItem("risk", "기본 수집 구조 정리 필요", "수집 항목과 처리 목적이 충분히 정리되지 않았습니다.", "수집 항목, 처리 목적, 보유기간을 먼저 표준화해서 정리하세요."));
  } else if (data.retentionDisclosure === "yes") {
    items.push(makeItem("good", "기본 고지 항목의 뼈대 존재", "수집 항목, 목적, 보유기간 축을 갖추고 있습니다.", "항목별 문구를 실제 처리방침 문장과 맞춰 두면 됩니다."));
  } else if (data.retentionDisclosure === "partial") {
    items.push(makeItem("warn", "보유기간 공개가 부분적임", "한국 기준에서는 항목별 보유기간 고지가 더 명확할수록 안전합니다.", "최소한 주요 수집 항목별 보유기간 또는 파기 기준을 분명히 적으세요."));
  } else {
    items.push(makeItem("risk", "보유기간 고지 미흡", "처리방침이나 내부 정리에 보유기간 정보가 충분하지 않습니다.", "보유기간 또는 파기 기준을 우선 채우세요."));
  }

  if (data.thirdPartySharing === "yes") {
    if (data.consentThirdParty === "yes") {
      items.push(makeItem("good", "제3자 제공 동의 구조 존재", "제3자 제공에 대한 별도 고지/동의 구조가 있습니다.", "제공받는 자, 목적, 항목, 보유기간까지 문구를 맞추세요."));
    } else {
      items.push(makeItem("risk", "제3자 제공 분리 고지 부족", "한국법에서는 제3자 제공 항목을 다른 동의와 분리해 보는 것이 중요합니다.", "제3자 제공 동의나 안내 문구를 수집·이용 문구와 분리해 설계하세요."));
    }
  } else if (data.thirdPartySharing === "unknown") {
    items.push(makeItem("warn", "제3자 제공 여부 불명확", "외부 업체와의 데이터 흐름이 제3자 제공인지 위탁인지 아직 구분되지 않았습니다.", "외부 업체별로 제3자 제공 / 위탁을 먼저 나누세요."));
  }

  if (data.crossBorderTransfer === "yes") {
    const okay = ["separate-consent", "contract-notice", "adequacy", "certification"].includes(data.crossBorderMechanism) || data.consentCrossBorder === "yes";
    if (okay) {
      items.push(makeItem("good", "국외이전 대응 방향 존재", "국외이전에 대한 별도 경로나 고지 방식이 정리되어 있습니다.", "이전 국가, 시기, 방법, 이전받는 자 문구를 구체화하세요."));
    } else {
      items.push(makeItem("risk", "국외이전 대응 구조 미흡", "해외 이전은 한국 기준에서 별도 검토 포인트인데 근거나 문구가 불명확합니다.", "별도 동의 또는 계약 이행 + 고지 방식 중 실제 경로를 확정하세요."));
    }
  }

  if (data.minorsHandling === "under14") {
    if (data.parentalProcess === "yes") {
      items.push(makeItem("good", "만 14세 미만 보호자 동의 구조 존재", "아동 대상 처리에 필요한 보호자 동의 흐름이 있습니다.", "고지 문구를 아동 친화적으로 다듬는 단계만 남았습니다."));
    } else {
      items.push(makeItem("risk", "만 14세 미만 보호자 동의 미비", "한국 기준에서는 만 14세 미만 처리 시 법정대리인 동의 프로세스가 중요합니다.", "가입 단계와 동의 확인 방식을 분리 설계하세요."));
    }
  } else if (data.minorsHandling === "unknown") {
    items.push(makeItem("warn", "아동 대상 여부 미정", "연령 기준이 필요한 서비스인지 아직 불명확합니다.", "회원가입 흐름에서 연령 게이트가 필요한지 먼저 판단하세요."));
  }

  if (usesMarketing && data.consentMarketing !== "yes") {
    items.push(makeItem("warn", "마케팅 동의 분리 검토 필요", "처리 목적에 마케팅이 보이지만 별도 동의 구조가 충분하지 않습니다.", "홍보성 정보 수신 및 마케팅 활용 문구를 별도 동의와 함께 정리하세요."));
  }

  if (data.automatedDecision === "yes" && data.automatedDisclosure !== "yes") {
    items.push(makeItem("warn", "자동화된 결정 설명 절차 부족", "자동화된 판단을 쓰면 거부·설명 요구 흐름을 준비하는 편이 좋습니다.", "설명 요청, 인적 개입, 재처리 프로세스를 메모 수준이라도 잡아 두세요."));
  }

  if (scan.hasText && (!scan.retention || !scan.thirdParty || !scan.crossBorder)) {
    const missing = [
      !scan.retention ? "보유기간" : null,
      !scan.thirdParty ? "제3자 제공" : null,
      !scan.crossBorder && data.crossBorderTransfer === "yes" ? "국외이전" : null,
    ].filter(Boolean);
    if (missing.length) {
      items.push(makeItem("warn", "처리방침 문구 힌트 부족", `붙여 넣은 문구에서 ${missing.join(", ")} 관련 표현이 약하게 보입니다.`, "실제 처리방침 본문에 해당 문구가 명시되어 있는지 확인하세요."));
    }
  }

  return finalizeJurisdiction("대한민국 개인정보 보호법", "kr", items);
}

function buildGdprDiagnostics(data, scan) {
  const items = [];
  const rights = new Set(data.rights);

  if (data.lawfulBasisMapped === "yes") {
    items.push(makeItem("good", "처리 목적별 법적 근거 정리됨", "GDPR 관점에서 핵심인 목적별 법적 근거 매핑이 준비되어 있습니다.", "각 목적마다 어떤 근거를 쓰는지 문서와 UI에 일관되게 맞추세요."));
  } else if (data.lawfulBasisMapped === "partial") {
    items.push(makeItem("warn", "법적 근거 매핑이 부분적임", "일부 목적만 정리되어 있어 GDPR 검토 시 빈칸이 생길 수 있습니다.", "회원가입, 고객지원, 마케팅, 분석 등 목적별 근거를 모두 채우세요."));
  } else {
    items.push(makeItem("risk", "법적 근거 매핑 부재", "GDPR은 동의 유무보다 왜 처리가 가능한지 정리하는 작업이 핵심입니다.", "처리 목적별 법적 근거 표를 먼저 만드세요."));
  }

  if (data.crossBorderTransfer === "yes") {
    if (["adequacy", "scc-or-contract"].includes(data.crossBorderMechanism)) {
      items.push(makeItem("good", "국외이전 보호장치 방향 존재", "EU 기준에서 요구되는 보호장치 방향이 정리되어 있습니다.", "이전 경로별 계약 문구와 수령인 정보를 맞추면 됩니다."));
    } else if (data.crossBorderMechanism === "separate-consent") {
      items.push(makeItem("warn", "국외이전을 동의에 크게 의존", "명시적 동의는 가능하지만 GDPR에서는 보충적 경로로 보는 편이 안전합니다.", "가능하면 적정성 인정 또는 표준계약 등 보호장치를 우선 검토하세요."));
    } else {
      items.push(makeItem("risk", "국외이전 보호장치 불명확", "EU 기준에서는 해외 이전 경로와 보호장치가 선명해야 합니다.", "적정성 인정, 표준계약, 예외 경로 중 어떤 방식인지 확정하세요."));
    }
  }

  const rightsOkay = ["access", "correction", "deletion", "portability"].every((key) => rights.has(key));
  if (rightsOkay && rights.has("objection")) {
    items.push(makeItem("good", "핵심 정보주체 권리 구조 존재", "열람, 정정, 삭제, 전송권, 이의제기 축이 비교적 잘 갖춰져 있습니다.", "응답 기한과 접수 채널 문구를 함께 적어 두면 더 좋습니다."));
  } else {
    items.push(makeItem("warn", "GDPR 권리 세트 보완 필요", "EU 기준에서는 열람, 정정, 삭제, 전송권, 이의제기 흐름을 더 분명히 보여주는 편이 좋습니다.", "권리 행사 목록과 접수 경로를 체크리스트로 분리하세요."));
  }

  if (data.cookiesUsage === "ads") {
    if (data.cookieConsent === "yes") {
      items.push(makeItem("good", "광고성 쿠키 동의 구조 존재", "행태정보·광고 쿠키에 대한 사전 동의 방향이 보입니다.", "동의 범주를 목적별로 나누면 더 안정적입니다."));
    } else {
      items.push(makeItem("risk", "광고/추적 쿠키 동의 부족", "EU 기준에서는 추적용 쿠키와 광고 목적 처리가 더 엄격하게 보일 수 있습니다.", "분석용과 광고용을 나눈 쿠키 동의 배너를 검토하세요."));
    }
  } else if (data.cookiesUsage === "analytics" && data.cookieConsent !== "yes") {
    items.push(makeItem("warn", "분석 쿠키 안내 보완 필요", "분석 쿠키만 쓰더라도 고지와 동의 구조를 점검하는 편이 좋습니다.", "쿠키 범주와 목적을 분리해 보여 주세요."));
  }

  if (data.minorsHandling === "under16") {
    if (data.parentalProcess === "yes") {
      items.push(makeItem("good", "16세 미만 보호자 동의 방향 존재", "아동 대상 처리를 고려한 부모 동의 구조가 있습니다.", "실제 진출 국가별 연령 차이를 별도 메모로 붙이세요."));
    } else {
      items.push(makeItem("risk", "16세 미만 보호자 동의 미비", "EU에서는 아동 대상 서비스일 때 보호자 동의 기준 검토가 중요합니다.", "진출 국가별 연령 기준과 동의 흐름을 설계하세요."));
    }
  }

  if (data.automatedDecision === "yes" && data.automatedDisclosure !== "yes") {
    items.push(makeItem("warn", "자동화된 결정 권리 안내 부족", "설명 요구, 인적 개입, 이의제기 흐름이 부족해 보입니다.", "자동화된 결정 여부와 설명 요청 경로를 명시하세요."));
  }

  if (scan.hasText && (!scan.lawfulBasis || !scan.rights || (data.crossBorderTransfer === "yes" && !scan.crossBorder))) {
    const missing = [
      !scan.lawfulBasis ? "법적 근거" : null,
      !scan.rights ? "정보주체 권리" : null,
      !scan.crossBorder && data.crossBorderTransfer === "yes" ? "국외이전" : null,
    ].filter(Boolean);
    items.push(makeItem("warn", "EU용 문구 힌트 부족", `붙여 넣은 문구에서 ${missing.join(", ")} 관련 표현이 약하게 보입니다.`, "정책 본문에 목적별 근거와 권리 안내가 실제로 드러나는지 확인하세요."));
  }

  return finalizeJurisdiction("GDPR / EU", "eu", items);
}

function buildCcpaDiagnostics(data, scan) {
  const items = [];
  const rights = new Set(data.rights);

  if (data.noticeAtCollection === "yes") {
    items.push(makeItem("good", "수집 시 고지 구조 존재", "수집 항목, 목적, 보관기간 정보를 시작점에서 안내하는 방향이 보입니다.", "실제 수집 화면에도 동일한 문구를 연결하세요."));
  } else if (data.noticeAtCollection === "partial") {
    items.push(makeItem("warn", "수집 시 고지가 부분적임", "캘리포니아 기준에서는 수집 시점 고지가 더 전면에 나오는 편이 좋습니다.", "수집 항목, 목적, 판매/공유 여부, 보유기간을 한 번에 보여 주세요."));
  } else {
    items.push(makeItem("risk", "수집 시 고지 부재", "캘리포니아 기준의 핵심인 수집 시 고지 구조가 부족합니다.", "별도 처리방침만이 아니라 입력 시점 근처의 고지 문구를 준비하세요."));
  }

  if (data.retentionDisclosure === "yes") {
    items.push(makeItem("good", "보유기간 고지 양호", "보유기간 또는 기준을 안내하는 구조가 비교적 명확합니다.", "수집 항목별 기간 기준을 유지하세요."));
  } else if (data.retentionDisclosure === "partial") {
    items.push(makeItem("warn", "보유기간 고지 보완 필요", "캘리포니아 기준에서도 보유기간 또는 그 기준을 드러내는 편이 좋습니다.", "항목별 기간 또는 기간 산정 기준을 채우세요."));
  } else {
    items.push(makeItem("risk", "보유기간 정보 부족", "보유기간 관련 정보가 약하면 진단 결과가 불안정해집니다.", "수집 항목별 보유 기준을 먼저 정리하세요."));
  }

  const sharingByTrackers = data.cookiesUsage === "ads";
  if (data.sellShareData === "yes" || sharingByTrackers) {
    if (data.sellShareOptOut === "yes") {
      items.push(makeItem("good", "판매/공유 거부 경로 존재", "Do Not Sell or Share 성격의 거부 흐름이 있습니다.", "앱/웹 전 화면에서 접근 가능한지 확인하세요."));
    } else {
      items.push(makeItem("risk", "판매/공유 거부 경로 부족", "광고성 공유나 판매 가능성이 있는데 거부 링크가 보이지 않습니다.", "판매/공유 거부 링크와 설정 화면을 우선 설계하세요."));
    }
  }

  if (data.sellShareData === "yes") {
    if (data.gpcSupport === "yes") {
      items.push(makeItem("good", "GPC 대응 고려됨", "브라우저의 전역 거부 신호 대응을 고려하고 있습니다.", "실제 동작 여부를 QA 단계에서 점검하세요."));
    } else {
      items.push(makeItem("warn", "GPC 대응 미정", "캘리포니아 실무에서는 GPC 신호 대응 여부도 함께 보는 편입니다.", "적어도 향후 작업 항목으로 올려 두세요."));
    }
  }

  if ((data.minorsHandling === "under14" || data.minorsHandling === "under16") && data.sellShareData === "yes") {
    if (data.parentalProcess === "yes") {
      items.push(makeItem("good", "미성년자 판매/공유 제한 대응 존재", "연령 기준에 따른 동의 흐름이 어느 정도 잡혀 있습니다.", "13세 미만 / 13~15세 분기 문구를 분리해 보강하세요."));
    } else {
      items.push(makeItem("risk", "미성년자 판매/공유 제한 미비", "캘리포니아에서는 16세 미만 판매/공유에 별도 주의가 필요합니다.", "13세 미만 보호자 동의와 13~15세 본인 동의 흐름을 구분하세요."));
    }
  }

  const ccpaRightsOkay = rights.has("access") && rights.has("deletion") && rights.has("correction");
  if (ccpaRightsOkay && rights.has("optout")) {
    items.push(makeItem("good", "소비자 권리 구조 존재", "열람, 삭제, 정정, 판매/공유 거부 권리 축이 보입니다.", "응답 기한과 접수 채널 안내만 더 보완하면 됩니다."));
  } else {
    items.push(makeItem("warn", "소비자 권리 안내 보완 필요", "캘리포니아 기준에서는 열람, 삭제, 정정, 거부 권리가 더 분명히 보여야 합니다.", "권리별 요청 경로를 체크리스트나 설정 화면으로 분리하세요."));
  }

  if (scan.hasText && (!scan.noticeAtCollection || !scan.optOut || !scan.cookies)) {
    const missing = [
      !scan.noticeAtCollection ? "수집 시 고지" : null,
      !scan.optOut && (data.sellShareData === "yes" || sharingByTrackers) ? "거부권" : null,
      !scan.cookies ? "쿠키/추적기술" : null,
    ].filter(Boolean);
    if (missing.length) {
      items.push(makeItem("warn", "캘리포니아용 문구 힌트 부족", `붙여 넣은 문구에서 ${missing.join(", ")} 관련 표현이 약하게 보입니다.`, "정책 본문과 설정 화면 안내 문구를 함께 보완하세요."));
    }
  }

  return finalizeJurisdiction("캘리포니아 CCPA/CPRA", "ca", items);
}

function makeItem(status, title, detail, action) {
  return { status, title, detail, action };
}

function finalizeJurisdiction(name, key, items) {
  const total = items.reduce((sum, item) => sum + STATUS_VALUE[item.status], 0);
  const score = items.length ? Math.round((total / items.length) * 100) : 0;
  const overallStatus = score >= 75 ? "good" : score >= 45 ? "warn" : "risk";
  return { name, key, score, overallStatus, items };
}

function renderResults(data, scan, diagnostics) {
  const priorities = diagnostics
    .flatMap((jurisdiction) => jurisdiction.items.map((item) => ({ ...item, jurisdiction: jurisdiction.name })))
    .filter((item) => item.status !== "good")
    .sort((a, b) => STATUS_VALUE[a.status] - STATUS_VALUE[b.status])
    .slice(0, 5);

  const note = buildMvpNote(data, diagnostics, scan);
  const scores = diagnostics
    .map((jurisdiction) => {
      return `
        <div class="score-pill">
          <strong>${jurisdiction.score}점</strong>
          <small>${jurisdiction.name}</small>
        </div>
      `;
    })
    .join("");

  const priorityHtml = priorities.length
    ? priorities
        .map((item) => {
          return `
            <div class="priority-chip">
              <strong>${item.jurisdiction}</strong>
              ${item.title}
            </div>
          `;
        })
        .join("")
    : '<div class="priority-chip"><strong>양호</strong> 큰 누락 없이 기본 구조가 잡혀 있습니다.</div>';

  const cards = diagnostics
    .map((jurisdiction) => {
      const itemHtml = jurisdiction.items
        .map((item) => {
          return `
            <div class="result-item">
              <span class="status-dot ${item.status}"></span>
              <div>
                <strong>${item.title}</strong>
                <p>${item.detail}</p>
                <small>${item.action}</small>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <article class="result-card">
          <div class="result-card-head">
            <div>
              <h4>${jurisdiction.name}</h4>
              <p>${describeApplicability(jurisdiction.key, data.markets)}</p>
            </div>
            <div class="status-score ${jurisdiction.overallStatus}">
              ${jurisdiction.score}점
              <small>${STATUS_LABEL[jurisdiction.overallStatus]}</small>
            </div>
          </div>
          <div class="result-list">${itemHtml}</div>
        </article>
      `;
    })
    .join("");

  resultPanel.innerHTML = `
    <div class="result-summary">
      <div>
        <span class="section-kicker">출력</span>
        <h2>${escapeHtml(data.companyName)} 진단 결과</h2>
        <p class="result-note">체크리스트 입력값과 처리방침 문구의 빠른 힌트 스캔을 합쳐서 1차 진단했습니다.</p>
      </div>

      <div class="score-strip">${scores}</div>

      <div class="priority-wrap">
        <h3>가장 먼저 볼 보완 포인트</h3>
        <div class="priority-list">${priorityHtml}</div>
      </div>

      <div class="result-note-box">
        <h3>권장 MVP 방향</h3>
        <p class="result-note">${note}</p>
      </div>

      <div class="result-grid">
        <h3>권역별 상세 진단</h3>
        ${cards}
      </div>
    </div>
  `;
}

function buildMvpNote(data, diagnostics, scan) {
  const highRisks = diagnostics.flatMap((jurisdiction) => jurisdiction.items).filter((item) => item.status === "risk").length;
  if (highRisks >= 5) {
    return "지금 단계에서는 문장별 법조문 매핑보다 체크리스트 방식으로 먼저 안정적인 진단 흐름을 만드는 편이 좋습니다. 특히 제3자 제공, 국외이전, 수집 시 고지, 판매/공유 거부권처럼 구조가 다른 항목부터 O/X 방식으로 정리한 뒤에 문장 분석 기능을 붙이는 것이 일정상 안전합니다.";
  }
  if (!scan.hasText) {
    return "정책 문구가 아직 없다면 먼저 실제 처리 현황 기반 체크리스트 진단으로 시작해도 충분합니다. 이후 처리방침 초안이 생기면 문장 힌트 스캔을 붙여 누락 문구를 잡는 방향으로 확장하면 됩니다.";
  }
  if (data.lawfulBasisMapped === "no" || data.noticeAtCollection === "no") {
    return "프로토타입 1차는 체크리스트 방식으로 충분히 의미가 있습니다. 다만 다음 확장에서는 GDPR용 법적 근거 문구와 캘리포니아용 수집 시 고지 문구를 자동 힌트로 잡아주는 텍스트 분석을 붙이면 제품 설명력이 훨씬 좋아집니다.";
  }
  return "현재 구조라면 체크리스트 진단을 MVP로 먼저 완성하고, 다음 단계에서 처리방침 문장 분석을 추가하는 흐름이 적절합니다. 특히 정책 문구에서 보유기간, 국외이전, 권리 안내, 판매/공유 거부권을 자동 탐지하는 수준부터 붙이면 확장성이 좋습니다.";
}

function describeApplicability(key, markets) {
  const active = new Set(markets);
  if (active.has(key)) {
    return "현재 선택한 진출 권역에 포함되어 우선 검토 대상입니다.";
  }
  return "현재 선택한 진출 권역에는 직접 포함되지 않지만 비교 기준으로 함께 표시합니다.";
}

function fillSample() {
  form.reset();
  Object.entries(SAMPLE_DATA).forEach(([key, value]) => {
    const field = form.elements.namedItem(key);
    if (!field) {
      return;
    }

    if (field instanceof RadioNodeList) {
      const first = field[0];
      if (first && first.type === "checkbox") {
        [...field].forEach((input) => {
          input.checked = Array.isArray(value) && value.includes(input.value);
        });
      } else if (first) {
        [...field].forEach((input) => {
          input.checked = input.value === value;
        });
      }
      return;
    }

    if (field.type === "checkbox") {
      field.checked = Boolean(value);
      return;
    }

    field.value = value;
  });
  ensureDefaultMarkets();
}

function renderEmpty() {
  resultPanel.innerHTML = `
    <div class="empty-state">
      <span class="section-kicker">출력</span>
      <h2>진단 결과가 여기에 표시됩니다</h2>
      <p>
        입력을 채운 뒤 <strong>진단 실행</strong>을 누르세요.
        이 프로토타입은 체크리스트 방식으로 우선 구현되어 있고, 정책 문구는 키워드 수준으로만 보조 점검합니다.
      </p>
    </div>
  `;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
