import Hero from 'components/shared/hero/index.hero'
import SocialData from 'data/social-links.json'

const ProductsHero: React.FC<HeroProps> = ({
  title,
  description,
  heroColor,
}) => {
  return (
    <Hero
      title={title}
      description={description}
      heroColor={heroColor}
      buttonText="Book a demo"
      buttonHref={SocialData.calendly}
    />
  )
}

export default ProductsHero
