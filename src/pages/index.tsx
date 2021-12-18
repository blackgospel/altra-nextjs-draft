import Page from 'components/global/page/index.page'
import Customer from 'components/home/customer/home.customer'
import HomeHero from 'components/home/hero/home.hero'
import ProductCard from 'components/home/product-card/index.product-card'

const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Customer />
      <ProductCard />
    </Page>
  )
}

export default Home
