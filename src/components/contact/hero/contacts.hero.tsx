import Hero from 'components/shared/hero/index.hero'
import SocialData from 'data/social-links.json'

const ContactsHero: React.FC = () => {
  return (
    <Hero
      title="Have a family member in a care home?"
      description="Do you like the idea and want to share it with the care home manager? We`ve made it easy to send them an email about our service."
      heroColor="accent"
      buttonText="Book a Demo"
      buttonHref={SocialData.calendly}
    />
  )
}

export default ContactsHero
