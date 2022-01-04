import DataSecurityHero from 'components/data-security/hero/data-security.hero'
import List from 'components/global/list/index.list'
import Page from 'components/global/page/index.page'
import DataSecuritySection from 'components/privacy-policy/section/privacy-policy.section'
import Link from 'next/link'

const DataSecurity = () => {
  return (
    <Page title="Data Security">
      <DataSecurityHero />
      <DataSecuritySection title="Data Protection for Altra">
        The Altra app is offered to you by the respective nursing home or senior
        living community (“nursing home”). If you register via Altra, receive or
        send messages, the nursing home is responsible for this data processing
        and uses Altra Health limited as a so-called processor. This means that
        Altra Health limited processes this data exclusively on behalf of and in
        accordance with the requirements of the nursing home. In addition, Altra
        Health limited collects certain personal data on its own responsibility,
        regardless of the respective nursing home. We inform you about this data
        processing in this data protection declaration. You can access this
        information at any time at
        <Link href="https://help.altra.ie/en/articles/5050699-data-protection-privacy-policy-for-altra-family">
          https://help.altra.ie/en/articles/5050699-data-protection-privacy-policy-for-altra-family
        </Link>
      </DataSecuritySection>
      <DataSecuritySection title="1. Responsible body / contact / data protection officer">
        The responsible body for the processing of data described in this data
        protection declaration is:
        <br />
        <br />
        Altra Health limited, 69 Marlborough Road, Donnybrook, D04X3C3
        <br />
        <br />
        If you have any questions or suggestions about data protection, you can
        also send us an email at <Link href="help@altra.ie">help@altra.ie</Link>
        .
        <br />
        <br />
        You can contact our data protection officer at{' '}
        <Link href="info@altra.ie">info@altra.ie</Link>.
      </DataSecuritySection>
      <DataSecuritySection title="2. Collection and use of your data">
        If you send us inquiries via our contact form, chat support or by
        e-mail, your details from the contact form, including the contact
        details you provided there (name, e-mail address, messages) or the
        details from your e-mail, will be processed for the purpose of
        processing the request is saved and used. We collect this data in order
        to be able to receive and process your request, Art. 6 Abs. 1 lit. b
        GDPR. If we process your data, as described above, for the purpose of
        receiving and processing your inquiries, you are contractually obliged
        to provide us with this data. Without this data, we are not able to
        receive and process your inquiries. We save your inquiries for a period
        of 12 months after your inquiry has been fully processed, In order to be
        able to understand in the case of further inquiries from you whether
        there have been technical difficulties with the app in the past and to
        be able to process your request optimally. If we are legally obliged to
        do so, we can also save your request beyond this period. In this case,
        however, your request will only be stored and used for the purpose of
        legal storage.
      </DataSecuritySection>
      <DataSecuritySection title="3. Permissions">
        Our app uses the following permissions:
        <br />
        <br />
        <List
          color="accent"
          list={[
            'Camera: Take photos / make videos',
            'Microphone: Record sound / voice messages',
            'Photo library: Upload photos',
          ]}
          title="permissions"
        />
      </DataSecuritySection>
      <DataSecuritySection title="4. Automated individual decision-making or profiling measures">
        We do not use automated processing for making decisions or for
        profiling.
      </DataSecuritySection>
      <DataSecuritySection title="5. Transfer of data">
        In principle, your personal data will only be passed on without your
        express prior consent in the following cases:
        <br />
        <br />
        <List
          color="accent"
          list={[
            'If it is necessary to investigate illegal use of our services or for legal prosecution, personal data will be passed on to the law enforcement authorities and, if necessary, to harmed third parties. However, this only happens if there are concrete indications of illegal or abusive behavior. A transfer can also take place if this serves to enforce terms of use or other agreements. We are also legally obliged to provide information to certain public bodies upon request. These are law enforcement authorities and authorities that prosecute administrative offenses.',
          ]}
          title="disclosure-of-data"
        />
        <br />
        <br />
        This data is passed on on the basis of our legitimate interest in
        combating abuse, prosecuting criminal offenses and securing, asserting
        and enforcing claims and that your rights and interests in the
        protection of your personal data do not outweigh your interests, Art. 6
        Para. 1 lit . f GDPR or based on a legal obligation according to Art. 6
        Para. c GDPR.
        <br />
        <br />
        <List
          color="accent"
          list={[
            'We rely on contractually affiliated external companies and external service providers ("processors") to provide the services. In such cases, personal data is passed on to these processors in order to enable them to continue processing. These processors are carefully selected by us and regularly checked to ensure that your rights and freedoms are protected. The contract processors may only use the data for the purposes specified by us and are also contractually obliged by us to treat your data exclusively in accordance with this data protection declaration and German data protection laws.',
          ]}
          title="disclosure-of-data"
        />
        <br />
        <br />
        In detail, we use the contract processors listed below. Insofar as
        personal data is transferred to third countries in this context, we
        ensure that this is done in accordance with the requirements of Art. 44
        ff GDPR. DPAs with the service providers we use who have their
        headquarters in the USA are listed below. The DPAs contain so-called
        standard contractual clauses. The standard contractual clauses are
        agreements adopted by the European Commission. If the processor signs
        such a standard contract, it undertakes to comply with European data
        protection standards.
        <br />
        <br />
        <List color="accent" title="disclosure-of-data">
          <span>
            Provision of server services, cloud hosting - Amazon Web Services
            EMEA, 38 avenue John F. Kennedy, 1855 Luxembourg, Luxembourg. Server
            location: Ireland for Irish clients, London for UK clients).{' '}
            <Link href="https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/">
              https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/
            </Link>
          </span>
          <span>
            Provision of email & SMS services - SendGrid, Inc.1801 California
            Street, Suite 500, Denver, CO 80202.{' '}
            <Link href="https://www.twilio.com/legal/data-protection-addendum">
              https://www.twilio.com/legal/data-protection-addendum
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
        </List>
        <br />
        <br />
        The transfer of data to contract processors takes place on the basis of
        Art. 28 Para. 1 GDPR, alternatively on the basis of our legitimate
        interest in the economic and technical advantages associated with the
        use of specialized contract processors, and the fact that your rights
        and interests in the protection of your personal data do not
        predominate, Art. 6 para. 1 lit. f GDPR.
        <br />
        <br />
        <List
          color="accent"
          list={[
            'As part of the further development of our business, the structure of Altra Health limited may change, as the legal form is changed, subsidiaries, parts of companies or parts of the company are founded, bought or sold. In such transactions, the customer information is passed on together with the part of the company to be transferred. Whenever personal data is passed on to third parties to the extent described above, we ensure that this is done in accordance with this data protection declaration and the relevant data protection laws.',
          ]}
          title="disclosure-of-data"
        />
        <br />
        <br />
        Any transfer of personal data is justified by the fact that we have a
        legitimate interest in adapting our corporate form to the economic and
        legal circumstances if necessary and your rights and interests in the
        protection of your personal data do not outweigh your interests, Art. 6
        Para. 1 lit. f GDPR.
      </DataSecuritySection>
      <DataSecuritySection title="6. Deletion of your data">
        We delete or anonymize your personal data as soon as it is no longer
        required for the purposes for which we collected or used it in
        accordance with the preceding paragraphs. As a rule, we store your
        personal data for the duration of the usage or contractual relationship
        via the app plus a period of 7 days in which we keep backup copies after
        deletion, unless this data is for legal reasons or for criminal
        prosecution or are needed longer to secure, assert or enforce legal
        claims. If data has to be kept for legal reasons, it will be blocked.
        The data is then no longer available for further use.
      </DataSecuritySection>
      <DataSecuritySection title="7. Data security">
        Data security is a key issue for us. We take suitable technical and
        organizational measures to ensure an appropriate level of protection
        when processing personal data. Our processes for developing and
        operating our app are in accordance with the latest international data
        security protocols.
      </DataSecuritySection>
      <br />
      <DataSecuritySection
        small
        title="8. Your rights as a data subject"
        subtitle="8.1 Right to information"
      >
        You have the right to request information from us at any time about the
        personal data relating to you processed by us within the scope of Art.
        15 GDPR. To do this, you can submit an application by post or email to
        the address given above.
      </DataSecuritySection>
      <DataSecuritySection small subtitle="8.2 Right to correct incorrect data">
        You have the right to request us to correct the personal data concerning
        you immediately if it is incorrect. To do this, please use the contact
        addresses given above.
      </DataSecuritySection>
      <DataSecuritySection small subtitle="8.3 Right to cancellation">
        You have the right, under the conditions described in Art. 17 GDPR, to
        request that we delete your personal data. In particular, these
        requirements provide for a right to erasure if the personal data are no
        longer necessary for the purposes for which they were collected or
        otherwise processed, as well as in cases of unlawful processing, the
        existence of an objection or the existence of an obligation to erase
        under Union law or the law of the member state to which we are subject.
        For the period of data storage see also section 7 of this data
        protection declaration. In order to assert your above right, please
        contact the contact addresses given above.
      </DataSecuritySection>
      <DataSecuritySection
        small
        subtitle="8.4 Right to restriction of processing"
      >
        You have the right to demand that we restrict processing in accordance
        with Art. 18 GDPR. This right exists in particular if the correctness of
        the personal data is disputed between the user and us, for the period
        that requires checking the correctness and in the event that the user
        requests restricted processing instead of deletion with an existing
        right to deletion; also in the event that the data is no longer required
        for the purposes we are pursuing, but the user needs it to assert,
        exercise or defend legal claims and if the successful exercise of an
        objection between us and the user is still disputed. In order to assert
        your above right, please contact the contact addresses given above.
      </DataSecuritySection>
      <DataSecuritySection small subtitle="8.5 Right to data portability">
        You have the right to receive the personal data relating to you that you
        have provided to us in a structured, common, machine-readable format in
        accordance with Art. 20 GDPR. In order to assert your above right,
        please contact the contact addresses given above.
      </DataSecuritySection>
      <DataSecuritySection small subtitle="8.6 Right to Object">
        You have the right, for reasons that arise from your particular
        situation, to object at any time to the processing of personal data
        relating to you, which, among other things, is based on Art. 6 Para. 1
        lit. e or f GDPR takes place, to file an objection according to Art. 21
        GDPR. We will stop processing your personal data unless we can
        demonstrate compelling legitimate reasons for processing that outweigh
        your interests, rights and freedoms, or the processing serves to assert,
        exercise or defend legal claims.
      </DataSecuritySection>
      <DataSecuritySection small subtitle="8.7 Right to complain">
        You also have the right to contact a competent supervisory authority if
        you have complaints. The supervisory authority responsible for Ireland
        is for example: Data Protection Commission,21 Fitzwilliam Square South,
        Dublin 2, D02 RD28, Ireland.{' '}
        <Link href="https://forms.dataprotection.ie/contact">
          https://forms.dataprotection.ie/contact
        </Link>
      </DataSecuritySection>
    </Page>
  )
}

export default DataSecurity
