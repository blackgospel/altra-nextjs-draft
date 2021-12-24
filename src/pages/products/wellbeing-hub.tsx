import WellbeingImage1 from 'assets/images/wellbeing/wellbeing-section-2.png'
import WellbeingImage2 from 'assets/images/wellbeing/wellbeing-section-3.png'
import WellbeingImage3 from 'assets/images/wellbeing/wellbeing-section-4.jpg'
import List from 'components/global/list/index.list'
import Page from 'components/global/page/index.page'
import ProductsDescription from 'components/products/descriptions/products.descriptions'
import ProductsHero from 'components/products/hero/products.hero'
import WellbeingHubBenefits from 'components/products/wellbeing-hub/benefits/wellbeing-hub.benefits'
import WellbeingHubIntroduction from 'components/products/wellbeing-hub/introduction/wellbeing-hub.introduction'
import Footer from 'components/shared/footer/index.footer'

const WellbeingHub = () => {
  return (
    <Page title="Wellbeing Hub | Altra Products">
      <ProductsHero
        title="Your on demand wellbeing hub"
        description="The tool to provide variety, consistency and expert quality to your wellbeing programmes."
        heroColor="violet"
      />
      <WellbeingHubIntroduction />
      <WellbeingHubBenefits />
      <ProductsDescription
        title="Refresh your current programming"
        description="Instantly activate a variety of on-demand Altra Wellbeing Hub classes
          in all of your homes or communities."
        image={WellbeingImage1}
        color="violet"
      >
        <List
          color="accent"
          title="wellbeing-hub-section-2"
          list={[
            'Easy, low-cost setup',
            'No bulky equipment to install.',
            'Designed to fit any budget.',
          ]}
          fullWidth
        />
      </ProductsDescription>
      <ProductsDescription
        title="Educational workshops"
        description="Drive participation while helping residents cope with their most salient health issues. We’re delivering today’s residents most sought after information."
        image={WellbeingImage2}
        color="red"
        reverse
      />
      <ProductsDescription
        title="Why do I need it?"
        description="Because you can’t do it all. No one could. This is your tool to round out current offerings, provide the variety, the consistency, the EXPERT quality and results driven exercises classes and wellness resources that you desire! We’re here to help."
        image={WellbeingImage3}
        color="green"
      />
      <Footer />
    </Page>
  )
}

export default WellbeingHub
