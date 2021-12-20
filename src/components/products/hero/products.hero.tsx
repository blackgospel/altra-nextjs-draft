import Hero from 'components/shared/hero/index.hero'

const ProductsHero: React.FC<ProductsHeroProps> = ({ title, description }) => {
  return <Hero title={title} description={description} color="secondary"></Hero>
}

export default ProductsHero
