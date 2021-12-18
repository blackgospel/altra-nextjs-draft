import Page from 'components/global/page/index.page'
import ChooseUs from 'components/home/choose-us/home.choose-us'
import Customer from 'components/home/customer/home.customer'
import HomeHero from 'components/home/hero/home.hero'
import ProductCard from 'components/home/product-card/index.product-card'
import Testimonials from 'components/home/testimonials/home.testimonials'

const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Customer />
      <ProductCard />
      <ChooseUs />
      <Testimonials />
    </Page>
  )
}

export default Home
