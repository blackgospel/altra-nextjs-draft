import ContactsForm from 'components/contact/form/contacts.form'
import ContactsHero from 'components/contact/hero/contacts.hero'
import Page from 'components/global/page/index.page'
import Footer from 'components/shared/footer/index.footer'

const Contact = () => {
  return (
    <Page title="Contact">
      <ContactsHero />
      <ContactsForm />
      <Footer />
    </Page>
  )
}

export default Contact
