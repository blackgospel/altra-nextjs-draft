import StaffImage1 from 'assets/images/staff/staff-section1.png'
import StaffImage2 from 'assets/images/staff/staff-section2.png'
import StaffImage3 from 'assets/images/staff/staff-section3.png'
import List from 'components/global/list/index.list'
import Page from 'components/global/page/index.page'
import ProductsDescription from 'components/products/descriptions/products.descriptions'
import ProductsHero from 'components/products/hero/products.hero'
import StaffHeadline from 'components/products/staff/headline/staff.headline'
import StaffTestimonial from 'components/products/staff/testimonial/staff.testimonial'

const Staff = () => {
  return (
    <Page title="Staff | Altra Products">
      <ProductsHero
        title="Change how you connect with your workforce"
        description="Save time. Communicate effectively. Eliminate back-and-forths."
        heroColor="red"
      />
      <StaffHeadline />
      <StaffTestimonial />
      <ProductsDescription
        title="Consolidate all team messaging into one communication hub"
        description="Sending messages across WhatsApp, email and individual texts is
        tedious to manage. Altra`s communication hub allows you to send group
        or individual messages via SMS that convert to 1:1 conversations.
        Never second-guess whether your message has been read. Easily track
        engagement rates and responses in one place."
        image={StaffImage1}
        color="red"
      />
      <ProductsDescription
        title="Fill more shifts, save more time."
        description="We know that rosters are constantly changing. Now managers can stay
        ahead of these changes and act when inevitable vacancies occur. Fill
        shifts in two easy steps:"
        image={StaffImage2}
        color="violet"
        reverse
        bubbleLeft
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
        title="Give time back to your managers and teams."
        description="Altra`s simple user experience makes communication between managers
        and team a breeze. By streamlining previously manual processes, we are
        saving managers hours each day to put back into resident wellbeing."
        image={StaffImage3}
        color="green"
      />
    </Page>
  )
}

export default Staff
