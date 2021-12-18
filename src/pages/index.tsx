import Page from 'components/global/page/index.page'
import Customer from 'components/home/customer/home.customer'
import HomeHero from 'components/home/hero/home.hero'

const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Customer />
    </Page>
  )
}

export default Home
