import Hero from 'components/shared/hero/index.hero'
import CustomerHeroData from 'data/customers/hero.json'
import SocialData from 'data/social-links.json'

const CustomersHero = () => {
  return (
    <Hero
      title={CustomerHeroData.title}
      description={CustomerHeroData.description}
      buttonText={CustomerHeroData.button}
      heroColor="secondary"
      buttonHref={SocialData.calendly}
    />
  )
}

export default CustomersHero
