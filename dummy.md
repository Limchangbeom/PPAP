# [GDPR 최종 정리 Report]

## 1. 개인정보의 범위 (Scope of Personal Data)

### 1.1. 관련 법 조문 및 원문 (GDPR 제4조 제1호)

유럽연합(EU) 일반 개인정보 보호법(GDPR)은 정보주체의 권리를 두텁게 보호하기 위해 개인정보의 개념을 매우 광범위하고 포괄적으로 정의하고 있습니다. 본 조문의 원문과 그 해석은 다음과 같습니다.

> **GDPR Article 4(1):**
> "'personal data' means any information relating to an identified or identifiable natural person ('data subject'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;"

* **원문 해석 및 분석:**
1. **"자연인에 관한 정보(Information relating to a natural person)":** 법인이나 단체에 대한 정보는 GDPR의 보호 대상에서 제외되며, 오직 '살아있는 자연인'에 관한 정보만을 대상으로 합니다. 이때 정보의 내용, 형식, 매체(서면, 디지털, 음성, 영상 등)는 불문합니다.
2. **"식별되었거나 식별될 수 있는(identified or identifiable)":** 정보 자체만으로는 누구인지 알 수 없더라도, 식별 가능성이 있다면 개인정보에 포함됩니다.
3. **식별 수단의 예시:** 법문에서는 이름(Name), 식별 번호(Identification number - 예: 여권번호, 주민등록번호 등), 위치 데이터(Location data), 그리고 온라인 식별자(Online identifier - 예: IP 주소, 쿠키 식별자, RFID 등)를 명시하고 있습니다. 나아가 신체적, 생리학적, 유전적, 정신적, 경제적, 문화적, 사회적 정체성을 나타내는 복합적 요소들도 식별 기준에 포함됩니다.



---

### 1.2. 주요 고려 요소 및 해석 지침 (EDPB 가이드라인 등)

유럽정보보호이사회(EDPB, 구 Article 29 Working Party)의 해석 지침에 따르면, 개인정보 범위를 판단할 때 다음 두 가지 핵심 기준이 적용됩니다.

* **직·간접적 식별 가능성 (Direct vs. Indirect Identification):**
* *직접 식별:* 정보 하나만으로 곧바로 특정 개인을 알 수 있는 경우 (예: 홍길동이라는 성명).
* *간접 식별:* 단독으로는 누구인지 알 수 없지만, 보유 중인 다른 정보와 대조·결합하거나 제3자의 협조를 얻어 특정할 수 있는 경우. 이 경우에도 GDPR상 개인정보로 인정됩니다.


* **상대적 식별성 (Relative vs. Absolute Identifiability):**
* 어떤 데이터가 특정인에게는 '익명 데이터'일 수 있으나, 해당 데이터를 처리하는 컨트롤러(개인정보처리자)나 제3자가 입수할 수 있는 합리적인 수단을 동원해 개인을 식별할 수 있다면, 객관적으로 보아 개인정보로 취급되어야 합니다. 즉, 식별 가능성은 절대적 기준이 아니라 '합리적으로 동원 가능한 수단'을 기준으로 하는 상대적 개념입니다.



---

### 1.3. 실제 판례 및 결정례 (CJEU 주요 판결)

#### ① 동적 IP 주소의 개인정보성 확립: Breyer 판결 (Case C-582/14)

* **사안 개요:** 독일의 해적당 정치인 패트릭 브레이어(Patrick Breyer)는 독일 연방정부 웹사이트를 방문할 때마다 자신의 동적 IP 주소가 법적 근거 없이 저장되는 것에 반발하여 소송을 제기했습니다. 독일 법원은 웹사이트 운영자(연방정부)가 단독으로는 동적 IP 주소만으로 이용자의 실명을 알 수 없다는 점에서 이것이 개인정보인지 의문을 품고 유럽사법재판소(CJEU)에 선결적 판결을 요청했습니다.
* **CJEU 판시사항:** CJEU는 웹사이트 운영자에게는 이용자의 실명을 알 수단이 없더라도, **인터넷 서비스 제공자(ISP)가 추가적인 법적·기술적 수단을 통해 해당 IP 주소와 계약자의 신원을 연결할 수 있는 가능성**이 존재한다면, 그 동적 IP 주소는 웹사이트 운영자에게도 **개인정보에 해당한다**고 판시하였습니다.
* **의의:** 이 판결은 데이터 처리자 기준이 아니라 "합리적으로 동원 가능한 모든 수단을 동원했을 때 식별 가능성"이 있는지를 기준으로 개인정보 범위를 폭넓게 해석해야 함을 확립한 대표적 판례입니다.

#### ② 익명화와 가명화의 경계: Nowak 판결 (Case C-434/16)

* **사안 개요:** 피터 노박(Peter Nowak)은 회계사 자격시험 채점 과정에서 자신을 평가한 시험관의 의견(답안지에 적힌 평가 메모)이 자신의 개인정보에 해당하므로 열람을 요구했으나, 시험 기관은 해당 의견이 채점자의 주관적 평가일 뿐더러 노박 본인을 식별하는 정보가 아니라고 거부했습니다.
* **CJEU 판시사항:** CJEU는 시험 답안지에 적힌 내용이나 시험관의 평가 의견이라 할지라도, 그것이 **특정 응시자(노박)의 지식 수준, 성과, 행동 등을 평가하기 위해 사용되었거나 그에 관한 정보를 담고 있다면** 이는 명백히 그 정보주체에 관한 '개인정보'에 해당한다고 판시했습니다. 정보의 객관적 진실성이나 주관적 의견 여부는 개인정보 여부를 가르는 기준이 되지 않습니다.

---

## 2. 동의와 수집 (Consent and Collection)

### 2.1. 관련 법 조문 및 원문 (GDPR 제6조 및 제4조 제11호)

유럽연합(EU) 일반 개인정보 보호법(GDPR)은 개인정보 처리가 적법하기 위해 충족해야 하는 법적 근거(Legal Bases)를 제6조 제1항에서 열거하고 있으며, 이 중 "동의"가 유효하기 위한 요건을 제4조 제11호 및 제7조에서 엄격하게 규정하고 있습니다.

> **GDPR Article 6(1) (처리의 적법성):**
> "Processing shall be lawful only if and to the extent that at least one of the following applies:
> (a) the data subject has given consent to the processing of his or her personal data for one or more specific purposes;
> (b) processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract;
> (c) processing is necessary for compliance with a legal obligation to which the controller is subject;
> (d) processing is necessary for vital interests of the data subject or of another natural person;
> (e) processing is necessary for the performance of a task carried out in the public interest;
> (f) processing is necessary for the performance of a task delegated to the controller or in order to take steps at the request of the data subject 구체적 이익 추구..."

> **GDPR Article 4(11) (동의의 정의):**
> "'consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her;"

* **원문 해석 및 분석:**
1. **자유로운 의사에 기한 동의 (Freely given):** 정보주체가 동의를 거부하거나 철회할 때 불이익을 받지 않아야 하며, 서비스 제공 조건으로 불필요한 개인정보 동의를 강제하는 행위(예: 결제와 무관한 마케팅 동의 필수화)는 무효가 됩니다.
2. **구체적성 (Specific):** 포괄적인 목적이 아니라, 명확하고 구체적인 처리 목적별로 각각 동의를 받아야 합니다.
3. **정보에 기반한 동의 (Informed):** 동의를 하기 전에 처리자의 신원, 처리 목적, 수집하는 개인정보 항목, 철회권 행사 방법 등에 대해 충분히 안내받아야 합니다.
4. **명확한 적극적 행위 (Unambiguous indication / Clear affirmative action):** 침묵, 미리 체크되어 있는 박스(Pre-ticked boxes), 단순히 웹사이트를 스크롤하는 행위 등은 GDPR상 유효한 동의로 인정되지 않습니다. 이용자가 직접 체크박스를 누르거나 명시적인 버튼을 클릭하는 등의 적극적 조치가 수반되어야 합니다.



---

### 2.2. 주요 고려 요소 및 학설·해석 지침 (EDPB 가이드라인)

유럽정보보호이사회(EDPB)의 동의 가이드라인(Guidelines 05/2020 on consent)에서는 실무적으로 다음 사항을 엄격히 통제합니다.

* **동의의 철회 (Withdrawal of Consent):** 정보주체는 언제든지 자신의 동의를 철회할 수 있어야 하며, 철회하는 방법은 동의를 할 때만큼이나 쉬워야 합니다. (예: 동의는 클릭 한 번으로 받으면서 철회는 서면이나 고객센터 전화로만 가능하게 하는 것은 위법)
* **결합 금지 (No Bundling):** 계약 체결이나 서비스 제공 조건으로 필수적이지 않은 개인정보 처리에 대한 동의를 끼워팔기 식으로 연계할 수 없습니다.

---

### 2.3. 실제 판례 및 결정례 (CJEU 주요 판결)

#### ① 쿠키 배너와 사전 체크박스의 위법성: Planet49 판결 (Case C-673/17)

* **사안 개요:** 독일의 온라인 복권 주최사인 Planet49는 이용자가 복권 응모에 참여할 때, 마케팅 정보 수신을 위한 쿠키 저장을 허용하는 **미리 체크된(pre-ticked) 박스**를 기본값으로 설정해 두었습니다. 이용자가 이 체크를 해제하지 않으면 동의한 것으로 간주하여 쿠키를 수집했습니다. 이에 대해 독일 소비자단체가 소송을 제기했습니다.
* **CJEU 판시사항:** CJEU는 미리 체크된 체크박스를 이용하는 방식은 GDPR 제4조 제11호 및 제7조에서 요구하는 "명확한 적극적 행위(clear affirmative action)"에 해당하지 않으며, 이용자의 침묵이나 부작위는 유효한 동의가 될 수 없다고 판시했습니다. 따라서 이러한 방식으로 수집된 동의는 무효이며 위법하다고 결정했습니다.

#### ② 동의의 자유로움과 조건부 서비스(Cookiewalls) 관련: Orange España 판결 (Case C-61/19 등) 및 EDPB 지침

* **사안 개요:** 통신사나 플랫폼 기업이 필수적이지 않은 서비스(예: 맞춤형 광고)에 동의하지 않으면 서비스를 이용할 수 없도록 강제하는 이른바 '쿠키 월(Cookie Wall)'의 적법성이 다뤄졌습니다.
* **판시 및 해석 방향:** EDPB와 유럽 법원 판례의 취지에 따르면, 이용자가 동의를 거부했을 때 서비스 이용이 불가능하다면 이는 진정한 의미의 "자유로운 동의(Freely given)"를 억압하는 것으로 보아 무효가 될 가능성이 매우 높습니다. 동의는 강제성이 없어야 하며, 거부했을 때 합리적인 대안이 보장되거나 서비스의 필수 기능 이용에 차별적 불이익이 없어야 합니다.

---


## 3. 제3자 제공 및 위·수탁 (Third-Party Disclosure and Data Processing Outsourcing)

### 3.1. 관련 법 조문 및 원문 (GDPR 제4조 제10호 - 수신자 정의, 제28조 - 처리자)

유럽연합(EU) GDPR은 개인정보를 보유한 주체인 컨트롤러(Controller, 개인정보처리자)와, 컨트롤러의 지시에 따라 대행 처리를 수행하는 프로세서(Processor, 수탁자)를 명확히 구분하여 규율합니다. 또한 외부 기관에 정보를 넘기는 행위는 '제3자 제공' 또는 '프로세서로의 위탁'으로 나누어 엄격한 통제 장치를 둡니다.

> **GDPR Article 4(10) (수신자의 정의):**
> "'recipient' means a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing;"

> **GDPR Article 28(1) (처리자(수탁자)의 의무):**
> "Where processing is to be carried out on behalf of a controller, the controller shall use only processors providing sufficient guarantees to implement appropriate technical and organisational measures in such a manner that processing will meet the requirements of this Regulation and ensure the protection of the rights of the data subject."

* **원문 해석 및 분석:**
1. **컨트롤러와 프로세서의 분리 (Controller vs. Processor):** 컨트롤러는 개인정보 처리의 목적과 수단을 "스스로 결정"하는 주체이며, 프로세서는 컨트롤러를 위해 "대신하여" 개인정보를 처리하는 외부 파트너(수탁자)입니다.
2. **처리 계약 체결의무 (Data Processing Agreement, DPA):** 컨트롤러가 프로세서에게 개인정보 처리를 위탁할 때는 반드시 법적 구속력이 있는 계약(또는 문서)을 체결해야 합니다. 이 계약에는 처리의 성격, 목적, 기간, 개인정보의 유형, 정보주체의 권리 보호 조치 등이 명시되어야 합니다.
3. **제3자 제공과의 차이:** 제3자 제공은 정보를 받는 자가 자신의 목적을 위해 독자적으로 데이터를 이용하는 경우로서 원칙적으로 정보주체의 별도 동의가 필요하지만, 프로세서(위·수탁)는 컨트롤러의 통제 하에 대행 업무만 수행하므로 별도의 동의보다는 **엄격한 위탁 계약 및 고지** 체계로 규율됩니다.



---

### 3.2. 주요 고려 요소 및 학설·해석 지침 (EDPB 가이드라인)

유럽정보보호이사회(EDPB)의 위·수탁 및 컨트롤러-프로세서 관계에 관한 지침(Guidelines 07/2020 on the concepts of controller and processor in the GDPR)에서는 다음의 실무적 기준을 강조합니다.

* **실질적 역할 기준 (Functional Approach):** 계약서에 "우리는 단순 수탁자다"라고 기재되어 있더라도, 수탁자가 스스로 처리 목적이나 핵심 수단을 결정하기 시작한다면 실질적으로는 '공동 컨트롤러(Joint Controllers)' 또는 독자적 컨트롤러로 간주되어 GDPR 위반 책임을 질 수 있습니다.
* **하위 수탁자(Sub-processor) 제한:** 프로세서는 컨트롤러의 사전에 명시적 또는 일반적인 서면 허가 없이 하위 수탁자를 임의로 선임할 수 없습니다.

---

### 3.3. 실제 판례 및 결정례 (CJEU 주요 판결 및 감독기관 처분)

#### ① 공동 컨트롤러 책임 범위: Fashion ID 판결 (Case C-40/17)

* **사안 개요:** 독일의 의류 쇼핑몰인 Fashion ID는 자사 웹사이트에 페이스북(Facebook)의 "좋아요(Like)" 소셜 플러그인을 삽입했습니다. 이로 인해 방문자의 브라우저 IP 주소와 기기 정보가 이용자의 동의 없이 자동으로 페이스북에 전송되었습니다. 소비자단체가 이를 문제 삼아 소송을 제기했습니다.
* **CJEU 판시사항:** CJEU는 Fashion ID가 페이스북의 데이터 처리 목적과 수단을 전적으로 결정하지는 않았더라도, **자사 웹사이트에 해당플러그인을 설치함으로써 페이스북으로의 데이터 수집 및 전송 행위를 공동으로 결정(경제적 이익 목적 등)하는 데 기여**했으므로, Fashion ID와 페이스북은 해당 데이터 수집 단계에서 "공동 컨트롤러(Joint Controllers)"에 해당한다고 판시했습니다.
* **의의:** 제3자 제공이나 단순 위·수탁 구조로 보인 형태라 할지라도, 플랫폼과 웹사이트 운영자 간의 실질적 관여도에 따라 공동 책임을 물을 수 있음을 명확히 한 대표적 판례입니다.

#### ② 위탁 계약 미체결 및 수탁자 관리 소홀에 대한 과징금 부과례 (EDPB 주요 집행 사례)

* 유럽 각국 데이터보호감독기관(DPA)은 컨트롤러가 적격한 보장을 제공하지 않는 프로세서(예: 보안 수준이 취약한 클라우드 서비스나 마케팅 대행사)를 이용하거나, GDPR 제28조에 따른 적법한 DPA(Data Processing Agreement)를 체결하지 않은 경우에 대해 대규모 과징금을 부과하고 있습니다. (예: 아일랜드 DPC의 메타 플랫폼 및 여타 글로벌 기업 대상 제28조 위반 제재 사례 다수 존재)

---

아, 죄송합니다! 제가 사용자의 의도와 흐름을 완전히 오해했군요.

사용자님께서는 4번 항목("어떤 부분을 만족해야 되는지(적정성 결정의 심사 요소 및 조건 등)"을 포함한 개인정보의 국외 이전 내용)을 더 상세히 다뤄달라고 요청하셨는데, 제가 임의로 다음 번호로 넘겨버리는 실수를 했습니다.

지적해주신 대로, 4번 항목(개인정보의 국외 이전 - GDPR 제45조 적정성 결정의 심사 요소를 포함한 상세 내용)을 조문 원문과 실제 집행례(Schrems 판결 등)의 근거를 바탕으로 훨씬 더 깊이 있고 빠짐없이 작성하여 다시 제시해 드리겠습니다.

---


## 4. 개인정보의 국외 이전 (GDPR 제44조 ~ 제50조)

### 4.1. 관련 법 조문 및 원문 (GDPR 제44조 및 제45조)

유럽연합(EU) GDPR 제5장은 EU 내의 개인정보가 제3국(EU 회원국이 아닌 국가)이나 국제기구로 이전될 때, GDPR에 의해 구축된 보호 수준의 연속성이 훼손되지 않도록 엄격한 규율 체계를 설정하고 있습니다.

> **GDPR Article 44 (국외 이전의 일반 원칙):**
> "Any transfer of personal data which are undergoing processing or are intended for processing after transfer to a third country or to an international organisation shall take place only if, subject to the other provisions of this Regulation, the conditions laid down in this Chapter are complied with by the controller and processor, including for onward transfers of personal data of the controller or processor to another third country or to an international organisation."

> **GDPR Article 45(1) & (2) (적정성 결정 및 심사 요소):**
> "(1) A transfer of personal data to a third country or an international organisation may take place where the Commission has decided that the third country, a territory or one or more specified sectors within that third country, or the international organisation ensures an adequate level of protection. Such a transfer shall not require any specific authorisation.
> (2) When assessing the adequacy of the level of protection, the European Commission shall, in particular, take account of the following elements:
> (a) the rule of law, respect for human rights and fundamental freedoms, relevant legislation, both general and sectoral, including concerning public security, defence, national security and public order and criminal law... effective and enforceable rights and effective administrative and judicial redress;
> (b) the existence and effective functioning of one or more independent supervisory authorities in the third country...;
> (c) the international commitments the third country or international organisation has entered into..."

* **원문 해석 및 분석:**
1. **이전의 제한 원칙 (제44조):** 개인정보의 제3국 이전은 GDPR 제5장에서 정한 요건을 충족할 때만 허용되며, 이는 향후 다른 제3국으로의 재이전(Onward transfer) 과정에서도 동일하게 적용됩니다.
2. **적정성 결정 (Adequacy Decision, 제45조 제1항):** EU 집행위원회가 해당 제3국이나 국제기구가 EU와 동등한 수준의 개인정보 보호를 보장한다고 결정한 경우, 별도의 특정한 허가(승인) 없이 안전하게 정보를 이전할 수 있습니다. (예: 대한민국은 2021년 12월 EU로부터 적정성 결정을 획득함)
3. **적정성 결정을 받기 위해 "만족해야 하는 구체적 요소" (제45조 제2항):**
* **법치주의 및 인권 존중 (제2항 a호):** 해당 국가의 일반 및 분야별 법률(공공안전, 국방, 국가안보, 형사법 등), 공공기관의 개인정보 접근 권한, 그리고 정보주체에게 실효적이고 집행 가능한 권리와 효과적인 행정적·사법적 구제수단이 보장되는지 여부.
* **독립적 감독기관의 존재 (제2항 b호):** 개인정보보호 규정의 준수를 보장하고 집행할 수 있는 하나 이상의 독립적인 감독기관이 존재하고 실효적으로 기능하는지 여부.
* **국제적 의무 준수 (제2항 c호):** 해당 제3국이 체결한 국제적 약속, 법적 구속력이 있는 협약, 다자간 또는 지역적 시스템 참여를 통해 발생하는무 의무.





---

### 4.2. 적정성 결정 부재 시의 안전장치 및 예외 (제46조, 제47조, 제49조)

적정성 결정을 받지 못한 제3국으로 개인정보를 이전해야 할 경우, 컨트롤러는 다음의 법적 수단을 강구해야 합니다.

* **적절한 안전장치 (Appropriate Safeguards, 제46조):**
* **SCC (Standard Contractual Clauses, 표준계약조항):** EU 집행위가 승인한 표준 계약 조항을 계약서에 포함시켜 제3국 수령인과의 사이에 법적 구속력을 부여하는 방식으로, 실무상 가장 널리 활용됩니다.
* **BCR (Binding Corporate Rules, 구속력 있는 기업규칙, 제47조):** 다국적기업 집단 내에서 EU 개인정보를 국외의 계열사로 이전할 때 사용하는 내부 규칙으로, 관할 감독기관들의 승인을 받아야 합니다.


* **특정 상황에 대한 예외 조항 (Derogations, 제49조):** 적정성 결정이나 SCC/BCR 등의 안전장치가 없는 예외적인 상황에서도, **정보주체의 명시적 동의**, 계약 이행을 위해 불가피한 경우, 중요한 공익상의 이유, 법적 청구권의 확립·행사·방어를 위해 필요한 경우 등에 한하여 제한적으로 이전이 허용됩니다.
* **제3국 정부의 부당한 요구 차단 (제48조):** 제3국 법원이나 행정기관이 EU 개인정보의 이전을 요구하더라도, EU와 해당 제3국 간에 체결된 국제협정(상호 사법 공조 조약 등)에 근거하지 않은 판결이나 결정은 인정되거나 집행될 수 없습니다.

---

### 4.3. 실제 판례 및 결정례 (CJEU 주요 판결)

#### ① 미국 간의 데이터 이전 체계 무효화: Schrems I & II 판결

* **Schrems I 판결 (Case C-362/14):** 맥스 슈렘스(Max Schrems)가 아일랜드 데이터보호청(DPC)에 페이스북의 미국으로의 개인정보 이전을 중단해달라고 진정한 사안입니다. CJEU는 미국 정보기관의 대규모 감시 프로그램이 EU 시민의 기본권을 침해한다는 이유로, 당시 미국과의 데이터 이전 협정이었던 **'세이프 하버(Safe Harbour) 협정'을 무효화**시켰습니다.
* **Schrems II 판결 (Case C-311/18):** 세이프 하버의 후속 체계인 **'프라이버시 쉴드(Privacy Shield)'** 마저 미국 감시법(FISA Section 702 등)이 EU의 비례성 원칙을 만족하지 못한다는 이유로 **최종 무효화**되었습니다. 이 판결로 인해 SCC를 활용할 때도 제3국의 현지 법령 수준을 개별적으로 평가하고 추가적 기술적 조치(암호화 등)를 더해야 한다는 실무적 기준이 확립되었습니다. (이후 미국은 새로운 대서양 간 데이터 프라이버시 프레임워크(DPF)를 체결하여 적정성 결정을 새롭게 획득함)

---



## 5. 미성년자 대상 개인정보 수집 (GDPR 제8조 및 각국 연령 기준 재정리)

### 5.1. 관련 법 조문 및 원문 (GDPR 제8조)

유럽연합(EU) GDPR은 정보사회 서비스(온라인 서비스, SNS, 앱, 게임 등)와 관련하여 아동의 개인정보를 수집할 때 성인과 차별화된 강화된 보호 장치를 두도록 규정하고 있습니다. 본 조문의 원문과 해석은 다음과 같습니다.

> **GDPR Article 8 (Conditions applicable to child's consent in relation to information society services):**
> "1. Where point (a) of Article 6(1) is applied in relation to the offer of information society services directly to a child, the processing of the personal data of a child shall be lawful where the child is at least 16 years old. Where the child is below the age of 16 years, such processing shall be lawful only if and to the extent that such consent is given or authorised by the holder of parental responsibility over the child.
> Member States may provide by law for a lower age for those purposes provided that such age is not below 13 years.
> 2. The controller shall make reasonable efforts to verify in such cases, taking into account the available technology, measures, to verify that consent is given or authorised by the holder of parental responsibility over the child.
> 3. Paragraph 1 shall not affect the general contract law of Member States such as the rules on the validity, formation or effect of a contract to which data subject is party..."

* **원문 해석 및 분석:**
1. **독자적 동의 연령 기준 (16세):** 아동을 대상으로 직접 정보사회 서비스(Information society services)를 제공할 때, 개인정보 처리가 합법적이려면 아동이 **최소 16세 이상**이어야 스스로 유효한 동의를 할 수 있습니다.
2. **법정대리인 동의 의무:** 만 16세 미만인 아동의 경우, 부모나 친권자 등 법정대리인(holder of parental responsibility)의 동의나 승인이 있는 경우에만 개인정보 처리가 합법화됩니다.
3. **회원국 재량권 (13세~16세):** EU 회원국은 국내법을 통해 이 연령을 낮출 수 있도록 재량을 부여받았으나, 그 하한선은 **만 13세 미만으로 낮출 수 없도록 엄격히 제한**하였습니다.
4. **부모 동의의 합리적 검증 의무 (제2항):** 컨트롤러(기업)는 단순히 형식적으로 동의 여부를 묻는 것에 그치지 않고, 가용한 기술적 수단을 동원하여 실제로 부모 책임 보유자가 동의를 주거나 승인했는지를 합리적으로 검증(reasonable efforts to verify)해야 하는 의무를 집니다.



---

### 5.2. 각 회원국별 아동 디지털 동의 연령 기준 (검증된 기준 적용)

GDPR 제8조 제1항 단서 규정에 따라, EU 회원국들은 각국의 국내 입법을 통해 13세에서 16세 사이에서 독자적 동의 연령을 다르게 설정하고 있습니다. 실무적으로 적용되는 대표적인 국가별 기준은 다음과 같습니다.

* **만 16세 (GDPR 기본 원칙 채택 국가):**
* 독일, 네덜란드, 헝가리, 루마니아, 슬로바키아, 리투아니아 등


* **만 15세:**
* **프랑스** (프랑스 데이터보호법에 따라 만 15세로 설정됨)


* **만 14세:**
* **스페인, 오스트리아, 이탈리아, 불가리아** 등


* **만 13세 (GDPR 허용 하한선 채택 국가):**
* **아일랜드, 벨기에, 체코, 덴마크, 폴란드, 스웨덴, 영국**(영국은 브렉시트 이후 자체 규제인 UK GDPR 상에서 만 13세 유지) 등



> **실무적 시사점:** 기업이 EU 대상 서비스를 운영할 때 단일 연령(16세)으로 일괄 적용하는 것은 각국 국내법 위반 소지가 있으므로, 이용자의 접속 국가(IP 등)를 식별하여 현지 법정 연령(13세~16세)에 맞춘 부모 동의 메커니즘을 동적으로 구현해야 합니다.

---

### 5.3. 적용 조건 및 실무적 고려 사항

GDPR 제8조 및 각국 국내법이 적용되기 위해서는 다음 요건들이 충족되어야 합니다.

* **법적 근거가 "동의"인 경우:** 계약 이행이나 법적 의무 준수 등 다른 적법 근거(제6조 제1항 b~f호)에 의해 아동의 데이터를 처리하는 경우에는 제8조의 아동 동의 연령 규정이 적용되지 않습니다.
* **정보사회 서비스(Information Society Services) 한정:** 전자적 수단으로 원격 제공되는 유·무상 서비스(앱, 소셜미디어, 온라인 게임, 스트리밍 서비스 등)에 한정됩니다.
* **아동을 대상으로 하는 서비스:** 서비스 자체가 아동을 타겟팅하고 있거나 명시적으로 아동의 이용을 전제하는 경우에 적용됩니다.

---

### 5.4. 실제 집행 사례 및 감독기관 처분

#### TikTok(틱톡) 아동 개인정보 보호 위반 제재 사례 (아일랜드 DPC 등)

* **사안 개요:** 유럽 각국 감독기관(특히 아일랜드 DPC)은 틱톡(TikTok) 등 대형 플랫폼들이 미성년자 가입 과정에서 각국의 법정 연령(13세~16세 미만)에 따른 부모 동의를 적절히 검증하지 않았거나, 아동 계정의 기본 설정을 공개(Public) 상태로 두어 아동의 개인정보를 무방비하게 노출한 행위에 대해 조사를 진행했습니다.
* **처분 내용:** 아일랜드 DPC 및 EDPB의 일관성 메커니즘을 거쳐 틱톡 측에 수억 유로에 달하는 대규모 과징금이 부과되었으며, 플랫폼 사업자는 미성년자 회원 가입 시 연령 확인 메커니즘을 강화하고, 부모 승인 프로세스를 기술적으로 보완하도록 시정명령을 받았습니다. 이는 제8조 제2항의 "합리적인 검증 노력" 의무를 소홀히 한 플랫폼에 대해 엄중한 책임을 묻는 대표적 선례가 되었습니다.

---

## 6. 자동화된 결정 및 프로파일링 (GDPR 제22조 및 EU AI Act 제86조)

### 6.1. 관련 법 조문 및 원문 (GDPR 제22조)

유럽연합(EU) GDPR은 정보주체의 권리를 보호하기 위해 알고리즘이나 자동화된 시스템에만 의존하여 중대한 결정을 내리는 행위를 엄격히 제한하고 있습니다. 본 조문의 원문과 주요 내용은 다음과 같습니다.

> **GDPR Article 22 (Automated individual decision-making, including profiling):**
> "1. The data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her.
> 2. Paragraph 1 shall not apply if the decision:
> (a) is necessary for entering into, or performance of, a contract between the data subject and a data controller;
> (b) is authorized by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject's rights and freedoms and legitimate interests; or
> (c) is based on the data subject's explicit consent.
> 3. In the cases in which point (a) and (c) of paragraph 2, the data controller shall implement suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and to contest the decision."

* **원문 해석 및 분석:**
1. **자동화된 결정 거부권 (제1항):** 정보주체는 법적 효력을 발생시키거나 이와 유사하게 중대한 영향을 미치는, **"전적으로(solely)"** 자동화된 처리(프로파일링 포함)에만 기반한 결정의 대상이 되지 않을 권리를 가집니다.
2. **예외 사유 (제2항):** ① 계약의 체결이나 이행을 위해 필수적인 경우, ② EU 또는 회원국 법률에 명시적 근거가 있고 적절한 보호 조치가 마련된 경우, ③ 정보주체의 명시적 동의(Explicit consent)를 받은 경우에는 예외적으로 허용됩니다.
3. **정보주체 보호 장치 (제3항):** 예외 사유로 인해 자동화된 처리가 이루어지는 경우라도, 컨트롤러는 최소한 **① 담당자의 개입을 요구할 권리, ② 자신의 의견을 표명할 권리, ③ 결정에 대해 이의를 제기(Contest)할 권리**를 포함한 적절한 안전장치를 보장해야 합니다.



---

### 6.2. 주요 고려 요소 및 학설·해석 지침 (형식적 인간 개입의 한계)

* **'Solely(전적으로)'의 의미와 한계 회피 방지:** 기업들이 GDPR 제22조의 적용을 회피하기 위해 알고리즘이 산출한 결과물에 단순히 사람의 이름만 올려두는 형식적인 인간 개입(Fabricating human involvement) 방식을 취하는 경우가 많습니다.
* **EDPB 가이드라인의 기준:** 유럽정보보호이사회(EDPB)는 인간 개입이 실질적이어야 하며, 단순히 시스템의 결정을 기계적으로 승인하는 수준이 아니라 **재량권을 가지고 결과를 재검토하고 변경할 수 있는 실효적 권한**이 수반되어야 자동화된 결정 규제를 벗어날 수 있다고 해석합니다.

---

### 6.3. 실제 판례 및 결정례 (CJEU 주요 판결)

#### ① 신용평가사(Scoring)의 자동화 결정 해당성: SCHUFA 판결 (Case C-634/21)

* **사안 개요:** 독일의 신용정보 평가기관인 슈파(SCHUFA)는 개인의 상환 능력을 예측하는 확률 값(신용 점수, Scoring)을 자동으로 산출하여 은행 등의 제3자에게 제공했고, 은행은 이 점수를 근거로 대출 승인 여부를 결정했습니다. 정보주체(OQ)는 이것이 GDPR 제22조 위반이라고 주장하며 소송을 제기했습니다.
* **CJEU 판시사항 (2023년 12월 7일 선고):** 유럽사법재판소(CJEU)는 신용정보회사가 자동화된 방식으로 생성한 신용 확률 값을 제3자(은행)에게 전달하고, 제3자가 대출 계약 체결 여부를 결정할 때 그 확률 값에 "강하게 의존(strongly rely)"하는 경우, 비록 최종 결정 주체가 은행이라 하더라도 그 전 단계의 신용 점수 산출 행위는 **GDPR 제22조상의 "자동화된 개별 결정"에 해당한다**고 판시했습니다.
* **의의:** 최종 결정 권한이 다른 기업에 있더라도, 중간 제공자의 알고리즘 산출물이 결정에 결정적 영향을 미친다면 제22조의 규율 범위에 포섭된다는 점을 명확히 하여 플랫폼 및 데이터 중개 서비스의 책임을 대폭 강화한 기념비적 판결입니다.

---

### 6.4. EU AI Act 제86조와의 관계 및 보완 체계

* **GDPR 제22조의 공백 보완:** GDPR 제22조는 '전적으로(solely)' 자동화된 처리에만 초점을 맞추고 있어, 인간이 부분적으로 개입하거나 AI 산출물에 '근거하여' 최종 판단을 내리는 복잡한 AI 시스템 영역에서는 보호의 사각지대가 발생했습니다.
* **EU AI Act 제86조 (고위험 AI 결정에 대한 설명 청구권):**
* 고위험 AI 시스템(High-risk AI systems)의 산출물에 **"근거하여(based on)"** 개인의 권리, 건강, 안전에 중대한 영향을 미치는 결정이 내려진 경우, 정보주체는 명확하고 의미 있는 설명을 받을 권리(Right to explanation)를 보장받습니다.
* 이는 완전한 자동화가 아니더라도 AI Act 체계 내에서 실효적 구제수단을 제공함으로써 GDPR 제22조를 보완하는 핵심 축으로 작동합니다.



---


## 7. 자동수집장치 및 쿠키 규제 (e프라이버시 지침 및 최신 동향)

### 7.1. 관련 법 조문 및 원문 (e프라이버시 지침 제5조 제3항)

유럽연합(EU)에서 쿠키, 웹 픽셀, 로컬 스토리지 등 자동수집장치와 단말기 접근을 규율하는 근간은 일반 개인정보보호법(GDPR)이 아니라 **e프라이버시 지침(ePrivacy Directive, 2002/58/EC)** 제5조 제3항입니다.

> **ePrivacy Directive Article 5(3):**
> "Member States shall ensure that the storing of information, or the gaining of access to information already stored, in the terminal equipment of a subscriber or user is only allowed on condition that the subscriber or user concerned has given his or her consent, having been provided with clear and comprehensive information, in accordance with Directive 95/46/EC [now GDPR], inter alia, about the purposes of the processing."

* **원문 해석 및 분석:**
1. **단말기 접근 및 저장 행위 규제:** 이용자의 단말기(스마트폰, PC 등)에 정보를 저장하거나 단말기에 이미 저장된 정보에 **접근하는 행위 자체**를 규제 대상으로 삼습니다.
2. **사전 동의(Opt-in) 원칙:** 해당 행위가 허용되려면, 이용자가 처리 목적 등에 대해 명확하고 포괄적인 정보를 제공받은 상태에서 사전에 동의(Consent)를 명시적으로 부여해야 합니다.
3. **예외 조항 (Strictly Necessary):** 통신 전송을 목적으로 하거나, 이용자가 명시적으로 요청한 정보사회 서비스 제공을 위해 **절대적으로 필요한(Strictly necessary)** 쿠키(예: 장바구니 쿠키 등)의 경우에만 동의 면제 예외가 인정됩니다.



---

### 7.2. 한국법(개인정보 보호법)과 EU법의 구조적 차이

| 구분 | 대한민국 (개인정보 보호법) | 유럽연합 (e프라이버시 지침 & GDPR) |
| --- | --- | --- |
| **규제의 첫 관문** | 해당 정보가 **'개인정보'에 해당하는지 여부** (식별성 및 타 정보와의 결합 용이성 판단) | 정보의 성격(개인정보 여부)과 무관하게 **'단말기 저장·접근 행위 자체'**를 규제 |
| **동의 방식** | 원칙적으로 사후 거부권 중심 (**Opt-out** 고지 및 설정 의무) | 사전 동의 필수 (**Opt-in**, 비필수 쿠키 배너를 통한 사전 승인 필수) |
| **법적 근거의 분산** | 개인정보 보호법 체계 내에서 일원화 규율 | e프라이버시 지침(단말기 접근)과 GDPR(동의 요건)의 이원적 체계 |

---

### 7.3. 실제 판례 및 결정례 (CJEU 주요 판결)

#### ① 쿠키 동의의 유효성 요건: Planet49 판결 (Case C-673/17)

* 앞서 2번 항목에서 다룬 바와 같이, CJEU는 웹사이트 방문 시 미리 체크된 체크박스를 통해 마케팅 및 분석용 쿠키 동의를 수집하는 행위는 e프라이버시 지침 제5조 제3항 및 GDPR상 유효한 동의 요건을 충족하지 못한다고 판시하였습니다.
* 비필수 쿠키는 이용자가 적극적으로 체크박스를 선택하는 등의 명확한 행위(Opt-in)가 있어야만 적법하게 설치될 수 있습니다.

---

### 7.4. 최신 입법 동향 (디지털 옴니버스 패키지 및 규제 개편)

* **ePrivacy Regulation 입법 난항과 철회:** 오랜 기간 추진되던 ePrivacy 규정(ePR) 제정안은 수년간의 입법 교착 상태 끝에 공식 철회되었습니다.
* **디지털 옴니버스 패키지 (Digital Omnibus Package):** 유럽집행위원회(European Commission)는 산발적인 규제를 정비하고 소위 "쿠키 배너 피로감(Cookie banner fatigue)"을 해소하기 위해, **쿠키 및 단말기 접근 관련 규정을 e프라이버시 지침에서 GDPR 체계 안으로 직접 편입**하는 대대적인 입법 개편안을 추진하고 있습니다.
* **향후 전망:** 이 개편안이 안착될 경우, 쿠키 동의 위반 행위는 기존 지침 위반을 넘어 **GDPR 위반 체계로 통합되어 전 세계 매출액의 최대 4%에 달하는 막대한 과징금** 리스크를 직접 받게 되며, 브라우저 등 중앙 집중식 설정을 통한 단일 클릭(One-click) 거부 신호 존중 의무가 강화될 전망입니다.

---

