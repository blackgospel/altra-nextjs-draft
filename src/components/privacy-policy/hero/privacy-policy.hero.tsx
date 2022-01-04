import Hero from 'components/shared/hero/index.hero'
import SocialData from 'data/social-links.json'

const PrivacyPolicyHero = () => {
  return (
    <Hero
      title="Privacy Policy"
      description="Check out our privacy policy."
      buttonText="Book a Demo"
      heroColor="secondary"
      buttonHref={SocialData.calendly}
    />
  )
}

export default PrivacyPolicyHero
