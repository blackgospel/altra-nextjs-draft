import Footer from 'components/global/footer/index.footer'
import Page from 'components/global/page/index.page'
import ChooseUs from 'components/home/choose-us/home.choose-us'
import Companies from 'components/home/companies/home.companies'
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
      <Companies />
      <Footer />
    </Page>
  )
}

export default Home
