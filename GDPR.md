# GDPR

- 기준 법령: Regulation (EU) 2016/679 (General Data Protection Regulation)
- 공식 법조문 URL: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679
- 공식 안내 URL: https://commission.europa.eu/law/law-topic/data-protection/eu-data-protection-rules_en

## 전체 방향

- GDPR은 한국 개인정보 보호법과 마찬가지로 `개인정보 범위`, `처리의 적법 근거`, `목적 제한`, `정보주체 권리`, `국외이전 보호장치`를 체계적으로 규율합니다.
- 다만 GDPR은 동의만을 유일한 처리 근거로 보지 않고, 계약, 법적 의무, 중대한 이익, 공익, 정당한 이익 등을 함께 인정하는 `legal basis` 구조가 핵심입니다.

## 1. 개인정보의 범위

참고 URL

- https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679

실제 영문

> ‘personal data’ means any information relating to an identified or identifiable natural person (‘data subject’); 
   an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, 
   an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, 
   economic, cultural or social identity of that natural person;
>
> Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, 
  cookie identifiers or other identifiers such as radio frequency identification tags. This may leave traces which, in particular when combined with unique 
  identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them.

한국어 해석

> 개인정보란 식별되었거나 식별 가능한 자연인과 관련된 모든 정보를 말합니다. 식별 가능성은 이름, 번호, 위치정보, 온라인 식별자 등으로 직접 또는 간접적으로 판단할 수 있습니다.
>
> 또한 GDPR은 기기·애플리케이션 등이 제공하는 온라인 식별자, 특히 IP 주소와 cookie identifiers가 자연인을 식별하거나 프로파일링하는 데 사용될 수 있다고 명시합니다.

정리

- GDPR의 개인정보 개념은 매우 넓고, `online identifier`를 법문에 직접 넣고 있습니다.
- 쿠키 식별자나 IP 주소는 다른 정보와 결합되어 개인을 식별할 수 있으면 개인정보로 평가됩니다.

## 2. 수집/이용 시 동의 필요 여부

참고 URL

- https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679

실제 영문

> Processing shall be lawful only if and to the extent that at least one of the following applies:
>
> (a) the data subject has given consent to the processing of his or her personal data for one or more specific purposes;
>
> (b) processing is necessary for the performance of a contract to which the data subject is party or in order to take steps 
      at the request of the data subject prior to entering into a contract;
>
> (c) processing is necessary for compliance with a legal obligation to which the controller is subject;
>
> (d) processing is necessary in order to protect the vital interests of the data subject or of another natural person;
>
> (e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;
>
> (f) processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party ...

한국어 해석

> 처리의 적법성은 적어도 하나의 법적 근거가 있을 때만 인정됩니다. 그 근거에는 동의뿐 아니라 계약 이행, 법적 의무 준수, 중대한 이익 보호, 공익 수행, 정당한 이익이 포함됩니다.

정리

- GDPR은 동의를 중요한 근거로 보지만, `항상 동의가 필요하다`는 구조는 아닙니다.
- 핵심은 수집·이용 목적별로 어떤 `legal basis`를 쓰는지 명확히 정하는 것입니다.

## 3. 제3자 제공 시 별도 동의 필요 여부

참고 URL

- https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679

실제 영문

> the recipients or categories of recipients of the personal data, if any;
>
> Processing shall be lawful only if and to the extent that at least one of the following applies ...

한국어 해석

> GDPR은 개인정보의 수령인 또는 수령인 범주를 정보주체에게 알려야 한다고 규정합니다.
>
> 그리고 제3자 제공 역시 결국 제6조의 적법 근거 중 하나에 의해 정당화되어야 합니다.

정리

- GDPR은 한국법처럼 `제3자 제공마다 항상 별도 동의`를 요구하지는 않습니다.
- 다만 별도 제공 목적을 뒷받침하는 적법 근거가 있어야 하고, 수령인 정보도 투명하게 고지해야 합니다.
- 제공 근거를 `동의`로 잡는 경우에는 그 제공 목적이 동의 범위에 포함되어야 합니다.

## 4. 국외이전 시 동의 필요 여부

참고 URL

- https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679

실제 영문

> Any transfer of personal data ... to a third country or to an international organisation shall take place only if 
  ... the conditions laid down in this Chapter are complied with ...
>
> A transfer of personal data to a third country or an international organisation may take place where the Commission has decided that 
  ... [it] ensures an adequate level of protection. Such a transfer shall not require any specific authorisation.
>
> In the absence of a decision pursuant to Article 45(3), a controller or processor may transfer personal data 
  ... only if the controller or processor has provided appropriate safeguards ...
>
> the data subject has explicitly consented to the proposed transfer, after having been informed of the possible risks of such transfers 
  for the data subject due to the absence of an adequacy decision and appropriate safeguards;

한국어 해석

> GDPR상 국외이전은 Chapter V의 조건을 충족해야만 가능합니다.
>
> 적정성 결정이 있으면 별도 허가 없이 이전할 수 있고, 적정성 결정이 없더라도 적절한 보호조치가 있으면 이전할 수 있습니다.
>
> 명시적 동의는 이러한 일반 장치가 없을 때 사용할 수 있는 한 가지 예외적 근거입니다.

정리

- GDPR은 `국외이전 = 항상 동의` 구조가 아닙니다.
- 기본은 `adequacy decision` 또는 `appropriate safeguards`이고, `explicit consent`는 보충적 derogation 중 하나입니다.

## 5. 미성년자 대상 개인정보 수집 시 법정대리인 동의가 필요한 연령

참고 URL

- https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679

실제 영문

> Where point (a) of Article 6(1) applies, in relation to the offer of information society services directly to a child, 
  the processing of the personal data of a child shall be lawful where the child is at least 16 years old. Where the child is below the age of 16 years, 
  such processing shall be lawful only if and to the extent that consent is given or authorised by the holder of parental responsibility over the child.
>
> Member States may provide by law for a lower age for those purposes provided that such lower age is not below 13 years.

한국어 해석

> 정보사회서비스를 아동에게 직접 제공하면서 `동의`를 처리 근거로 쓰는 경우, 아동이 16세 이상이면 본인 동의가 가능하고, 16세 미만이면 친권자 등 법정책임자의 동의 
  또는 승인이 필요합니다. 다만 회원국은 이 연령을 13세 이상 범위에서 낮출 수 있습니다.

정리

- GDPR의 기본 연령은 `16세`입니다.
- 다만 이 규정은 `정보사회서비스`와 `동의를 근거로 한 처리`에 한정되고, 회원국별로 `13~16세` 범위 조정이 가능합니다.

## 6. 자동화된 결정에 관한 규정

참고 URL

- https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679

실제 영문

> The data subject shall have the right not to be subject to a decision based solely on automated processing, 
  including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her.
>
> Paragraph 1 shall not apply if the decision:
>
> (a) is necessary for entering into, or performance of, a contract ...
>
> (b) is authorised by Union or Member State law ... and which also lays down suitable measures ...
>
> (c) is based on the data subject's explicit consent.
>
> ... the data controller shall implement suitable measures ... at least the right to obtain human intervention ... 
  to express his or her point of view and to contest the decision.

한국어 해석

> GDPR은 법적 효과를 발생시키거나 이에 준할 정도로 중대한 영향을 미치는 결정을 오로지 자동화 처리에만 기초해 내리는 것에 대해, 정보주체가 원칙적으로 적용받지 않을 권리를 인정합니다.
>
> 예외는 계약 체결·이행 필요성, 법률상 허용, 명시적 동의입니다. 다만 예외가 적용되더라도 인간 개입 요구, 의견 제출, 다툴 권리 등 보호장치가 필요합니다.

정리

- GDPR 제22조는 자동화된 결정에 관한 대표적인 직접 규율 조항입니다.
- 한국법과 비슷하게 `설명`, `인간 개입`, `이의제기` 성격의 보호장치가 핵심입니다.

## 7. 쿠키에 대한 개인정보성 판단

참고 URL

- https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679

실제 영문

> Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, 
  cookie identifiers or other identifiers ... This may leave traces which ... may be used to create profiles of the natural persons and identify them.

한국어 해석

> GDPR은 cookie identifiers를 온라인 식별자의 예시로 직접 언급하고, 이러한 식별자가 다른 정보와 결합되면 개인 프로파일을 만들고 자연인을 식별하는 데 사용될 수 있다고 봅니다.

정리

- GDPR에서는 쿠키가 그 자체로 항상 개인정보인 것은 아니지만, `개인 식별 또는 프로파일링 가능성`이 있으면 개인정보로 평가됩니다.
- 특히 다른 서버 정보, 계정 정보, 고유 식별자와 결합되는 경우 개인정보성이 강하게 인정됩니다.
