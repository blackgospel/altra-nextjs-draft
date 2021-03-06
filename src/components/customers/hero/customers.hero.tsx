import Hero from 'components/shared/hero/index.hero'
import SocialData from 'data/social-links.json'

const CustomersHero = () => {
  return (
    <Hero
      title='"Altra has changed our worklife"'
      description="See what other care homes have to say about Altra."
      buttonText="Book a Demo"
      heroColor="secondary"
      buttonHref={SocialData.calendly}
    />
  )
}

export default CustomersHero
