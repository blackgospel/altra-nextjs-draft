import Hero from 'components/shared/hero/index.hero'

const ProductsHero: React.FC<HeroProps> = ({
  title,
  description,
  heroColor,
}) => {
  return (
    <Hero title={title} description={description} heroColor={heroColor}></Hero>
  )
}

export default ProductsHero
