# Report

## 큰 방향

- 대한민국 `개인정보 보호법`과 `GDPR`은 모두 `처리 가능 근거 + 목적 제한 + 정보주체 권리 + 국외이전 보호체계`를 중심으로 설계되어 있어 구조적으로 유사합니다.
- 반면 `CCPA`는 `notice at collection`, `sale/share opt-out`, `consumer request rights` 중심의 소비자 권리법적 성격이 강합니다.
- 그래서 CCPA의 `동의` 개념을 한국법이나 GDPR의 일반적 사전 동의 개념과 같은 축에서 단순 비교하면 오해가 생길 수 있습니다.

## 항목별 비교

| 항목 | 대한민국 개인정보 보호법 | GDPR | CCPA |
|---|---|---|---|
| 개인정보의 범위 | `제2조`에서 살아 있는 개인에 관한 정보로서 단독 식별 또는 다른 정보와 쉽게 결합해 식별 가능한 정보를 포함합니다. 가명정보 개념도 함께 둡니다. | `Art. 4(1)`에서 identified/identifiable natural person과 관련된 모든 정보를 개인정보로 봅니다. `Recital 30`은 online identifier와 cookie identifiers를 직접 언급합니다. | `§1798.140(v)`에서 consumer 또는 household와 직접·간접으로 연결될 수 있는 정보를 폭넓게 포함합니다. `cookies`, `pixel tags`, browsing history도 명시됩니다. |
| 수집/이용 시 동의 필요 여부 | `제15조`는 동의 외에도 법률상 의무, 공공업무, 계약 이행 등 여러 처리 근거를 둡니다. 따라서 항상 동의가 필요한 것은 아니지만, 해당 근거가 없으면 동의가 필요합니다. | `Art. 6(1)`은 consent, contract, legal obligation, vital interests, public task, legitimate interests를 병렬로 둡니다. 즉 GDPR도 동의만이 유일한 근거는 아닙니다. | 일반적인 사전 opt-in 구조가 아니라 `§1798.100`의 notice at collection 구조가 기본입니다. 따라서 수집·이용 전반에 대한 일반적 동의 의무는 없습니다. |
| 제3자 제공 시 별도 동의 필요 여부 | `제17조`상 원칙적으로 정보주체 동의가 핵심이며, `제18조` 목적 외 제공은 `별도의 동의`가 원칙입니다. 다만 법정 예외가 있습니다. | 별도 동의가 항상 필요한 것은 아닙니다. 제공 목적을 뒷받침하는 적법 근거가 있으면 가능하되, `Art. 13/14`에 따른 recipient 고지와 투명성이 필요합니다. | 원칙은 `별도 사전 동의`가 아니라 `sale/share opt-out`입니다(`§1798.120`). service provider/contractor 제공은 계약 통제로 관리합니다(`§1798.100(d)`). |
| 국외이전 시 동의 필요 여부 | `제28조의8`은 국외이전을 원칙적으로 금지하고, 예외적으로 `별도 동의`, 법률·조약, 계약 이행을 위한 공개/통지, 인증, 동등성 인정 등을 허용합니다. 즉 동의는 한 가지 경로이지 유일한 경로는 아닙니다. | Chapter V에 따라 `Art. 45` 적정성 결정, `Art. 46` 적절한 보호조치, `Art. 49` derogation이 있으면 이전 가능합니다. 명시적 동의는 보충적 예외사유 중 하나입니다. | 검토한 주요 조문에는 한국법/GDPR처럼 국외이전 전용 동의 규정이 별도로 확인되지 않았습니다. 해외이전 여부 자체보다 sale/share와 notice, 계약 제한이 중심입니다. |
| 미성년자 대상 개인정보 수집 시 법정대리인 동의가 필요한 연령 | `제22조의2`에 따라 만 14세 미만 아동의 개인정보 처리에 동의가 필요할 때는 법정대리인 동의가 필요합니다. | `Art. 8`에 따라 정보사회서비스에 대해 동의를 근거로 처리하는 경우 기본 16세 미만은 parental responsibility holder의 동의가 필요합니다. 다만 회원국은 13세 이상 범위에서 낮출 수 있습니다. | `§1798.120(c)`에 따라 `sale/share`에 한해서 13세 미만은 부모·보호자 opt-in, 13세 이상 16세 미만은 아동 본인 opt-in입니다. 일반 수집 전반에 대한 규정은 아닙니다. |
| 자동화된 결정에 관한 규정 | `제37조의2`는 완전히 자동화된 결정이 권리·의무에 중대한 영향을 미치면 거부권과 설명요구권을 인정하고, 인적 개입 재처리 등 조치를 요구합니다. | `Art. 22`는 solely automated decision-making에 대해 원칙적 거부권을 인정하고, 예외가 있어도 human intervention, view expression, contest rights를 보장합니다. | `§1798.185(a)(15)`는 Agency가 automated decisionmaking technology와 profiling에 대한 access/opt-out 및 logic information 규정을 만들도록 위임합니다. 한국법/GDPR처럼 완결된 본문 권리조항은 상대적으로 약합니다. |
| 쿠키에 대한 개인정보성 판단 | 법문에 쿠키라는 표현은 직접 없지만, `제2조`상 다른 정보와 쉽게 결합해 개인을 알아볼 수 있으면 개인정보가 됩니다. 따라서 식별 가능한 쿠키 식별자는 개인정보로 평가될 수 있습니다. | `Recital 30`이 `cookie identifiers`를 직접 언급합니다. 다른 정보와 결합되어 프로파일링·식별이 가능하면 개인정보로 봅니다. | `§1798.140(aj)`가 `cookies`를 unique personal identifier 예시로 직접 열거합니다. 따라서 소비자 또는 가구와 연결되는 쿠키 식별자는 CCPA 개인정보 범위에 직접 들어옵니다. |

## 실무상 체크포인트

- 한국법: `수집/이용`, `제3자 제공`, `국외이전` 동의 구조를 분리해서 검토해야 합니다. 특히 `제17조`, `제18조`, `제28조의8`은 각각 요구사항이 다릅니다.
- GDPR: 동의 여부만 볼 것이 아니라 처리 목적별 `legal basis mapping`과 `recipient/transfer transparency`를 함께 봐야 합니다.
- CCPA: `동의서 설계`보다 `notice at collection`, `Do Not Sell or Share`, `GPC`, `service provider/contractor` 계약 문구, 미성년자 sale/share 대응이 더 핵심입니다.
- 쿠키 배너를 비교할 때도 한국법/GDPR은 식별성과 처리근거, CCPA는 sale/share 및 online identifier 범위를 함께 봐야 합니다.

## 한 줄 결론

- 대한민국 개인정보 보호법과 GDPR은 구조가 상당히 비슷하지만, CCPA는 `개인정보 처리의 적법근거`를 전면적으로 통제하기보다 `사업자의 고지의무 + 소비자의 선택권 행사`에 초점을 두는 점이 가장 큰 차이입니다.
