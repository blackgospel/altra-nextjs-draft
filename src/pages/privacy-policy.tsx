import List from 'components/global/list/index.list'
import Page from 'components/global/page/index.page'
import PrivacyPolicyHero from 'components/privacy-policy/hero/privacy-policy.hero'
import PrivatePolicySection from 'components/privacy-policy/section/privacy-policy.section'
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <Page title="Privacy Policy">
      <PrivacyPolicyHero />
      <PrivatePolicySection title="Data Privacy Statement">
        Under this data privacy statement, we are informing you about the
        personal data that we collect in connection with your use of Altra and
        about the purpose for which the data will be used. You can retrieve this
        information at any time at{' '}
        <Link href="http://help.altra.ie/en/articles/5631489-data-privacy-statement-altra-webpage">
          http://help.altra.ie/en/articles/5631489-data-privacy-statement-altra-webpage
        </Link>
        .
      </PrivatePolicySection>
      <PrivatePolicySection title="1. Controller / Contact">
        The controller, within the meaning of the data protection laws, is:
        Altra Health limited, 69 Marlborough Road, Donnybrook, D04X3C3 Should
        you have any questions or suggestions regarding data protection, please
        feel free to contact us by e-mail at the following address:{' '}
        <Link href="mailto:help@altra.ie">help@altra.ie</Link>.
      </PrivatePolicySection>
      <PrivatePolicySection
        title="2. Collection and use of your data"
        subtitle="2.1 Contact form"
      >
        If you send us enquiries via our contact form, then your details on the
        contact form, including the contact data you entered there (name, email
        address, message), will be stored and used for the purpose of processing
        the enquiry. We collect these data in order to receive and process your
        enquiry (Art. 6 para. 1 (b) of the General Data Protection Act (GDPR)).
        If, as described above, we process your data for the purpose of
        receiving and processing your enquiries, then you are contractually
        obliged to make these data available to us. Without such data, we will
        not be in a position to receive and process your enquiries.
      </PrivatePolicySection>
      <PrivatePolicySection title="3. Google Analytics">
        We use Google Analytics, a web analytics service provided by Google LLC
        (“Google”). Google Analytics collects pseudonymous data from you about
        the use of our app, including your truncated IP address. These data are
        transferred to and stored on a Google server in the United States.
        Google will use this information to allow us to evaluate your use of the
        app, to compile reports on the use of the app and to generate other
        analyses and evaluations related to the use of the app and the Internet.
        Google will also transfer this information to third parties, if required
        to do so by law or if third parties process the information on Google’s
        behalf. Google Analytics will store your data for a period of 14 months.
        After this period ends, the data will be deleted and only aggregated
        statistics will be retained. For more information about how Google uses
        your information, please see Google’s Privacy Policy:
        <Link href="https://www.google.com/policies/privacy/">
          https://www.google.com/policies/privacy/
        </Link>
        .
        <br />
        <br />
        If you do not wish to receive the webpage analyses, you may deactivate
        Google Analytics using a browser add-on. You can download this browser
        add-on here:{' '}
        <Link href="http://tools.google.com/dlpage/gaoptout?hl=de">
          http://tools.google.com/dlpage/gaoptout?hl=de
        </Link>
        . Alternatively, you may object to the use of Google Analytics by
        clicking here ({' '}
        <Link href="https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApi_gat?hl">
          here
        </Link>
        .)
        <br />
        <br />
        The use of Google Analytics is based on our legitimate interest in a
        needs-based design, statistical evaluation and the efficient promotion
        of our app and on the fact that you do not have an overriding legitimate
        interest (Art. 6 para. 1 (f) GDPR).
      </PrivatePolicySection>
      <PrivatePolicySection title="4. Automated individual decision-making or profiling measures">
        We do not use automated processing for making decisions or for
        profiling.
      </PrivatePolicySection>
      <PrivatePolicySection title="5. Disclosure of data">
        In general, your personal data will be disclosed without your express
        prior consent in the following situations only:
        <br />
        <br />
        <List
          color="accent"
          list={[
            'If it is necessary to clarify an unlawful use of our services or to pursue the judicial enforcement of rights, then personal data will be disclosed to the prosecuting authorities and, if necessary, to injured third parties. Such disclosure will occur, however, only if there are specific indicia of illegal or abusive behaviour. A disclosure can also be made if it serves the enforcement of terms of use or other agreements. We are also legally obliged to provide information to certain government bodies upon request, including prosecuting authorities, authorities that prosecute administrative offences or tax authorities.',
          ]}
          title="disclosure-of-data"
        />
        <br />
        <br />
        The disclosure of these data is made on the basis of our legitimate
        interest in combating misuse, pursuing criminal offences and securing,
        asserting and enforcing claims and on the notion that you do not have an
        overriding legitimate interest (Art. 6 para. 1 (f) GDPR) or on the basis
        of a legal obligation pursuant to Art. 6 para. 1 (c) GDPR
        <br />
        <br />
        <List
          color="accent"
          list={[
            'We rely on contractually affiliated third parties and external service providers (“processors”) to provide the services. In those cases, personal information is shared with these processors to enable them to process it further. These processors are carefully selected and regularly reviewed by us to ensure that your rights and freedoms are protected. The processors may use the data exclusively for the purposes specified by us and are furthermore contractually obliged by us to treat your data exclusively in accordance with this data privacy statement and the German data protection laws. Specifically, we rely on the following processors:',
            'Google LLC (Google Analytics)',
            'Amazon Web Services EMEA (Amazon AWS)',
            'Intercom (chat support, knowledge base, help centre)',
          ]}
          title="disclosure-of-data"
        />
        <br />
        <br />
        The disclosure of data to processors is based on Art. 28 para. 1 GDPR,
        or alternatively on our legitimate interest in the economic and
        technical benefits associated with the deployment of specialised
        processors and the fact that your rights and interests in protecting
        your personal data are not overriding (Art. 6 para. 1 (f) GDPR).
        <br />
        <br />
        <List color="accent" title="disclosure-of-data">
          <span>
            Provision of Analytics - Google LLC. 1600 Amphitheatre Pkwy.
            Mountain View, CA 94043.{' '}
            <Link href="https://www.google.com/analytics/terms/dpa/dataprocessingamendment_20130906.html">
              https://www.google.com/analytics/terms/dpa/dataprocessingamendment_20130906.html
            </Link>
          </span>
          <span>
            Provision of server services, cloud hosting - Amazon Web Services
            EMEA, 38 avenue John F. Kennedy, 1855 Luxembourg, Luxembourg. Server
            location Ireland (Eu-West-1)).{' '}
            <Link href="https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/">
              https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/
            </Link>
            .
          </span>
          <span>
            Provision of chat support, knowledge base, help centre - Intercom,
            Inc. (Intercom R&D Unlimited Company), 55 2nd Street, 4th FloorSan
            Francisco, California 94105.{' '}
            <Link href="https://www.intercom.com/help/en/articles/1385437-how-intercom-complies-with-gdpr">
              https://www.intercom.com/help/en/articles/1385437-how-intercom-complies-with-gdpr
            </Link>
          </span>
          <span>
            In connection with the further development of our business, the
            structure of Altra Health limited could change through a legal
            reorganization or if subsidiaries, corporate divisions or business
            units are formed, purchased or sold. In such transactions, customer
            information is transferred together with the part of the company
            being transferred. We shall act to ensure that each transfer of
            personal data to third parties to the extent described above is
            carried out in accordance with this data privacy statement and the
            relevant data protection laws.
          </span>
        </List>
        <br />
        <br />
        Any disclosure of personal data is justified by the fact that we have a
        legitimate interest in adjusting our corporate form in an effort to
        adjust to the economic and legal circumstances as required and that your
        rights and interests in the protection of your personal data are not
        overriding (Art. 6 para. 1 (f)f GDPR).
      </PrivatePolicySection>
      <PrivatePolicySection title="6. Erasure of your data">
        We will delete or render anonymous your personal data as soon as they
        are no longer required for the purposes for which we have collected or
        used them in accordance with the above sections. As a rule, we store
        your personal data for the duration of the usage or contractual
        relationship via the app, plus a period of 7 days during which time we
        will store backup copies following the erasure, unless such data are
        needed for a longer period of time based on legal reasons or for
        criminal prosecution or to secure, assert or enforce legal claims. If
        data must be retained for legal reasons, then such data will be blocked.
        In that case, the data will no longer be available for any other use.
      </PrivatePolicySection>
      <br />
      <PrivatePolicySection
        small
        title="7. Your rights as data subject"
        subtitle="7.1 Right of access to information"
      >
        You have the right to obtain from us at any time upon request
        information about personal data that are related to you and processed by
        us within the scope of Art. 15 GDPR. For this purpose, you may submit an
        application via post or email to the address indicated above.
      </PrivatePolicySection>
      <PrivatePolicySection
        small
        subtitle="7.2 Right to correct incorrect data"
      >
        You have the right to demand that we correct your personal data without
        undue delay if they are incorrect. To do so, please contact us at the
        contact addresses indicated above.
      </PrivatePolicySection>
      <PrivatePolicySection small subtitle="7.3 Right to erasure">
        Subject to the conditions described in Art. 17 GDPR, you have the right
        to demand that erase your personal data. In particular, these conditions
        provide for a right of erasure if the personal data are no longer
        necessary for the purposes for which they were collected or otherwise
        processed, or in cases of unlawful processing, the lodging of an
        objection or the existence of an obligation to erase under Union law or
        the laws of the Member State to which we are subject. Regarding the
        period of data storage, please also see section 7 of this data privacy
        statement. To exercise your aforementioned right, please contact us at
        the addresses shown above.
      </PrivatePolicySection>
      <PrivatePolicySection
        small
        subtitle="7.4  Right to restrict the processing"
      >
        You have the right to demand that we restrict the processing in
        accordance with Art. 18 GDPR. This right exists, particularly if the
        correctness of the personal data is in dispute between the user and us,
        for the duration of period required to verify the correctness, and in
        the event that the user demands restricted processing in lieu of the
        user’s existing right to erasure; and will also exist in the event that
        the data are no longer needed for the purposes that we are pursuing but
        the user still requires the data for purposes of asserting, exercising
        or defending legal claims, and if there is still a dispute between us
        and the user about whether an objection has been successfully exercised.
        To exercise your aforementioned right, please contact us at the
        addresses shown above.
      </PrivatePolicySection>
      <PrivatePolicySection small subtitle="7.5 Right to data portability">
        You have the right to receive from us the personal data that concerns
        you and that you have provided to us in a structured, commonly-used and
        machine-readable format in accordance with Art. 20 GDPR. To exercise
        your aforementioned right, please contact us at the addresses indicated
        above.
      </PrivatePolicySection>
      <PrivatePolicySection small subtitle="7.6 Right to object">
        You have the right in accordance with Art. 21 GDPR to object, at any
        time and on grounds relating to your particular situation, to the
        processing of personal data that concerns you and that is carried out,
        inter alia, on the basis of Art. 6 para. 1 (e) or (f) GDPR. We will stop
        processing your personal data, unless we can demonstrate compelling
        legitimate grounds for the processing and they override your interests,
        rights and freedoms, or that the processing serves to establish,
        exercise or defend legal claims.
      </PrivatePolicySection>
      <PrivatePolicySection small subtitle="7.7 Right to lodge a complaint">
        You also have the right to lodge complaints with a competent supervisory
        authority. The supervisory authority responsible for Ireland is for
        example: Data Protection Commission,21 Fitzwilliam Square South, Dublin
        2, D02 RD28, Ireland.{' '}
        <Link href="https://forms.dataprotection.ie/contact">
          https://forms.dataprotection.ie/contact
        </Link>
      </PrivatePolicySection>
    </Page>
  )
}

export default PrivacyPolicy
