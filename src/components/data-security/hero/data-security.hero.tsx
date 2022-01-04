import Hero from 'components/shared/hero/index.hero'
import SocialData from 'data/social-links.json'

const DataSecurityHero = () => {
  return (
    <Hero
      title="Data Security"
      description="Check out our data security."
      buttonText="Book a Demo"
      heroColor="secondary"
      buttonHref={SocialData.calendly}
    />
  )
}

export default DataSecurityHero
