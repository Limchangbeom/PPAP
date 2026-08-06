# CCPA

- 기준 법령: California Consumer Privacy Act of 2018 (CPRA amended)
- 공식 안내 URL: https://oag.ca.gov/privacy/ccpa
- 공식 법조문 URL:
  - https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.100.&lawCode=CIV
  - https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.115.&lawCode=CIV
  - https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.120.&lawCode=CIV
  - https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.140.&lawCode=CIV
  - https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.185.&lawCode=CIV

## 전체 방향

- CCPA는 한국법이나 GDPR처럼 "개인정보 처리 전반에 대한 일반적 사전 동의"를 중심 원리로 두기보다는, 
  `notice at collection`, `sale/share opt-out`, `consumer request rights`, `service provider/contractor` 계약통제를 중심으로 설계되어 있습니다.
- 그래서 같은 "동의"라는 표현을 써도, CCPA에서는 미성년자 sale/share, financial incentive, sensitive personal information 제한 등 
  특정 영역에서만 opt-in 구조가 강하게 나타납니다.

## 1. 개인정보의 범위

참고 URL

- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.140.&lawCode=CIV

실제 영문

> “Personal information” means information that identifies, relates to, describes, is reasonably capable of being associated with, 
   or could reasonably be linked, directly or indirectly, with a particular consumer or household.
>
> “Personal information” includes, but is not limited to, the following ... (A) Identifiers such as a real name, 
  alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address ...
>
> (F) Internet or other electronic network activity information, including, but not limited to, browsing history, search history, 
      and information regarding a consumer’s interaction with an internet website application, or advertisement.
>
> “Unique identifier” or “unique personal identifier” means a persistent identifier ... including ... 
  an Internet Protocol address; cookies, beacons, pixel tags, mobile ad identifiers, or similar technology ...

한국어 해석

> “개인정보”란 특정 소비자 또는 가구와 직접적 또는 간접적으로 식별되거나, 관련되거나, 설명되거나, 합리적으로 연계될 수 있는 정보를 말합니다.
>
> 여기에는 실명, 별칭, 주소, 고유 식별자, 온라인 식별자, IP 주소, 이메일 주소 등이 포함될 수 있습니다.
>
> 또한 browsing history, search history, 웹사이트·앱·광고와의 상호작용 정보 같은 인터넷/전자 네트워크 활동 정보도 포함됩니다.
>
> 더 나아가 `cookies`, `beacons`, `pixel tags`, 모바일 광고 식별자 같은 지속적 식별자도 고유 식별자에 포함됩니다.

정리

- CCPA는 `consumer`뿐 아니라 `household`까지 연결될 수 있는 정보를 폭넓게 개인정보로 봅니다.
- 쿠키, 픽셀, IP 주소, browsing history가 조문상 명시되어 있어 온라인 추적 정보가 개인정보 범위에 직접 들어옵니다.

## 2. 수집/이용 시 동의 필요 여부

참고 URL

- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.100.&lawCode=CIV

실제 영문

> A business that controls the collection of a consumer’s personal information shall, at or before the point of collection, inform consumers of the following:
>
> (1) The categories of personal information to be collected and the purposes for which the categories of personal information are collected 
      or used and whether that information is sold or shared.
>
> (3) The length of time the business intends to retain each category of personal information ...
>
> A business’ collection, use, retention, and sharing of a consumer’s personal information shall be reasonably necessary 
  and proportionate to achieve the purposes for which the personal information was collected or processed ...

한국어 해석

> 사업자는 개인정보를 수집하는 시점 또는 그 이전에, 어떤 범주의 개인정보를 수집하는지, 어떤 목적으로 수집·이용하는지, 
  판매 또는 공유되는지, 얼마나 보관할 것인지를 소비자에게 알려야 합니다.
>
> 또한 수집·이용·보관·공유는 수집 목적을 달성하는 데 합리적으로 필요하고 비례적인 범위여야 합니다.

정리

- CCPA에는 한국법 제15조나 GDPR 제6조처럼 "수집/이용 자체에 대한 일반적 사전 동의"를 일률적으로 요구하는 구조가 없습니다.
- 기본 구조는 `동의`보다 `수집 시 고지(notice at collection)`와 목적 제한, 비례성, 보관기간 고지입니다.

## 3. 제3자 제공 시 별도 동의 필요 여부

참고 URL

- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.100.&lawCode=CIV
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.115.&lawCode=CIV
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.120.&lawCode=CIV

실제 영문

> A business that collects a consumer’s personal information and that sells that personal information to, 
  or shares it with, a third party or that discloses it to a service provider or contractor for a business purpose shall enter into 
  an agreement with the third party, service provider, or contractor ...
>
> A consumer shall have the right, at any time, to direct a business that sells or shares personal information 
  about the consumer to third parties not to sell or share the consumer’s personal information.
>
> A third party shall not sell or share personal information about a consumer that has been sold to, or shared with, the third party by 
  a business unless the consumer has received explicit notice and is provided an opportunity to exercise the right to opt-out pursuant to Section 1798.120.

한국어 해석

> 사업자가 개인정보를 제3자에게 판매·공유하거나, 사업 목적상 service provider/contractor에게 제공하는 경우에는 관련 계약을 체결해야 합니다.
>
> 소비자는 언제든지 자신의 개인정보를 제3자에게 판매·공유하지 말라고 지시할 권리가 있습니다.
>
> 제3자는 사업자로부터 받은 개인정보를 다시 판매·공유하려면, 소비자가 명시적 고지를 받고 opt-out 기회를 제공받았어야 합니다.

정리

- CCPA는 한국법처럼 "제3자 제공마다 원칙적으로 별도 사전 동의" 구조가 아닙니다.
- 대신 `sale/share`에 대해서는 `opt-out` 권리를 부여하고, service provider/contractor 구조에는 계약상 제한을 둡니다.
- 다만 미성년자 sale/share는 아래와 같이 opt-in입니다.

## 4. 국외이전 시 동의 필요 여부

참고 URL

- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.100.&lawCode=CIV
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.115.&lawCode=CIV
- https://oag.ca.gov/privacy/ccpa

실제 영문

> A business that collects a consumer’s personal information and that sells that personal information to, or shares it with, a third party or that discloses 
  it to a service provider or contractor for a business purpose shall enter into an agreement with the third party, service provider, or contractor ...

한국어 해석

> CCPA 조문은 제3자, service provider, contractor에 대한 제공·공유를 일반적으로 규율하지만, 수령인이 해외에 있다는 이유만으로 별도 동의를 요구하는 독립 조항은 두지 않고 있습니다.

정리

- 검토한 CCPA 주요 조문(`1798.100`, `1798.115`, `1798.120`, `1798.140`, `1798.185`)에는 
  한국법 제28조의8이나 GDPR Chapter V처럼 `국외이전 전용` 동의 규정이 별도로 확인되지 않았습니다.
- 따라서 CCPA에서는 해외이전 여부 자체보다는 `sale/share`, `notice`, `contractual restriction`, `consumer rights`가 핵심 규율 포인트입니다.

## 5. 미성년자 대상 개인정보 수집 시 법정대리인 동의가 필요한 연령

참고 URL

- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.120.&lawCode=CIV
- https://oag.ca.gov/privacy/ccpa

실제 영문

> A business shall not sell or share the personal information of consumers if the business has actual knowledge that the consumer is less than 16 years of age, 
  unless the consumer, in the case of consumers at least 13 years of age and less than 16 years of age, or the consumer’s parent or guardian, 
  in the case of consumers who are less than 13 years of age, has affirmatively authorized the sale or sharing of the consumer’s personal information.

한국어 해석

> 사업자가 소비자가 16세 미만임을 실제로 알고 있는 경우, 그 소비자의 개인정보를 판매·공유해서는 안 됩니다. 
  다만 13세 이상 16세 미만은 소비자 본인, 13세 미만은 부모 또는 보호자가 적극적으로 허용(opt-in)한 경우는 예외입니다.

정리

- CCPA에서 부모 동의 연령 기준은 `13세 미만`입니다.
- 다만 이 규정은 `일반적 수집` 전반이 아니라 `sale/share`에 관한 규정이라는 점을 꼭 구분해야 합니다.

## 6. 자동화된 결정에 관한 규정

참고 URL

- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.140.&lawCode=CIV
- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.185.&lawCode=CIV

실제 영문

> “Profiling” means any form of automated processing of personal information ... to evaluate certain personal aspects relating to 
  a natural person and in particular to analyze or predict aspects concerning that natural person’s performance at work, 
  economic situation, health, personal preferences, interests, reliability, behavior, location, or movements.
>
> Issuing regulations governing access and opt-out rights with respect to a business’ use of automated decisionmaking technology,
  including profiling and requiring a business’ response to access requests to include meaningful information about the logic 
  involved in those decisionmaking processes, as well as a description of the likely outcome of the process with respect to the consumer.

한국어 해석

> CCPA는 `profiling`을 자동화된 개인정보 처리의 한 형태로 정의합니다.
>
> 그리고 법 자체가 곧바로 GDPR 제22조 같은 완결형 권리를 선언하기보다는, Agency가 automated decisionmaking technology와 
  profiling에 관한 접근권·opt-out권 및 설명 관련 규정을 마련하도록 위임하고 있습니다.

정리

- CCPA는 자동화된 결정에 관한 완성형 일반조항보다는 `정의 + 규정 위임` 구조가 강합니다.
- 따라서 한국법 제37조의2나 GDPR 제22조처럼 조문 본문에서 바로 거부권을 폭넓게 선언하는 구조와는 다릅니다.

## 7. 쿠키에 대한 개인정보성 판단

참고 URL

- https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.140.&lawCode=CIV

실제 영문

> “Unique identifier” or “unique personal identifier” means a persistent identifier ... including ... 
  cookies, beacons, pixel tags, mobile ad identifiers, or similar technology ...
>
> “Personal information” includes ... online identifier, Internet Protocol address ...
>
> “Personal information” includes ... browsing history, search history, and information regarding 
  a consumer’s interaction with an internet website application, or advertisement.

한국어 해석

> CCPA는 쿠키, 비콘, 픽셀 태그, 모바일 광고 식별자 같은 지속적 식별자를 직접 언급하고, 온라인 식별자·IP 주소·브라우징 기록·광고 상호작용 정보도 개인정보 범위에 포함시킵니다.

정리

- CCPA에서는 쿠키가 `개인정보가 될 수 있다` 수준이 아니라, 조문상 `unique identifier`의 예시로 직접 명시됩니다.
- 따라서 소비자 또는 가구와 연결되는 쿠키 기반 식별자는 원칙적으로 CCPA 개인정보 범위에 들어간다고 보는 것이 안전합니다.
