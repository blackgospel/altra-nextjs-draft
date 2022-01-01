import ContactsForm from 'components/contact/form/contacts.form'
import ContactsHero from 'components/contact/hero/contacts.hero'
import Page from 'components/global/page/index.page'

const Contact = () => {
  return (
    <Page title="Contact">
      <ContactsHero />
      <ContactsForm />
    </Page>
  )
}

export default Contact
