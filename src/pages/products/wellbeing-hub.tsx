import ProductImage from 'assets/images/home/hero-wellbeing.png'
import WellbeingImage1 from 'assets/images/wellbeing/wellbeing-section-1.jpg'
import WellbeingImage2 from 'assets/images/wellbeing/wellbeing-section-3.png'
import WellbeingImage3 from 'assets/images/wellbeing/wellbeing-section-4.jpg'
import List from 'components/global/list/index.list'
import Page from 'components/global/page/index.page'
import ProductsDescription from 'components/products/descriptions/products.descriptions'
import ProductsHero from 'components/products/hero/products.hero'
import WellbeingHubBenefits from 'components/products/wellbeing-hub/benefits/wellbeing-hub.benefits'

const WellbeingHub = () => {
  return (
    <Page title="Wellbeing Hub | Altra Products">
      <ProductsHero
        title="Your on demand wellbeing hub"
        description="Access a library of curated content to provide variety and consistency to your activity programmes in your care home."
        heroColor="violet"
      />
      <ProductsDescription
        title="What is the Wellbeing Hub?"
        description="We partner with experts in active ageing, dementia care & more to
        produce state-of-the-art exercise videos and wellness resources
        specifically designed to improve the lives of older adults in care
        homes and at home. This one-of-a-kind expert programming is available
        effortlessly on any device."
        image={ProductImage}
        color="primary"
        bubbleLeft
        reverse
      />
      <WellbeingHubBenefits />
      <ProductsDescription
        title="Refresh current programming in your care home"
        description="Altra’s Wellbeing Hub can grow and revitalize your activity programming giving you access to 100s of ideas and wellness videos at your fingertips."
        image={WellbeingImage1}
        color="violet"
        bubbleRight
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
        title="Learn from the best"
        description="Each video and resource has been created, produced and is led by internationally recognized active ageing experts to provide you a purposeful, results driven wellbeing tool."
        image={WellbeingImage2}
        color="red"
        reverse
      />
      <ProductsDescription
        title="Why do I need it?"
        description="Because it is time consuming to continuously find new activity ideas and programming. This is your tool to round out current offerings, provide the variety, the consistency, the expert quality and results driven exercises classes and wellness resources that you desire! We’re here to help."
        image={WellbeingImage3}
        color="green"
        bubbleLeft
      />
    </Page>
  )
}

export default WellbeingHub
