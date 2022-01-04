import ProductImage3 from 'assets/images/home/hero-dashboard.png'
import ProductImage1 from 'assets/images/home/hero-family.png'
import ProductImage2 from 'assets/images/home/hero-wellbeing.png'

export default [
  {
    title: 'Family Engagement & Resident Experience',
    description:
      'Enhance resident experience in your care home with tools that provide meaningful engagement and keep families, residents and your team connected.',
    list: [
      'Secure engagement app that allows care homes to share updates on the well-being of residents directly with families.',
      'Convert digital content from families and your team into personalised physical newsletters for residents to enjoy.',
      'Manage visits, showcase your activities and more.',
    ],
    color: 'primary',
    link: '/products/family',
    image: ProductImage1,
  },
  {
    title: 'Wellbeing Hub',
    description:
      'Your very own on-demand wellbeing hub. Access a library of curated content to provide variety and consistency to your activity programmes in your care home.',
    list: [
      'Access 100s of ideas and videos for your activities / wellbeing team.',
      'All content is created and produced by experts in active aging.',
      'Variety of content so there’s something to suit every resident.',
    ],
    color: 'secondary',
    link: '/products/wellbeing-hub',
    image: ProductImage2,
  },
  {
    title: 'Staff Communication',
    description:
      'Consolidate all your team messaging into one single platform. Communicate effectively, eliminate back-and-forths, and save time.',
    list: [
      'Eliminate use of multiple messaging streams like Whatsapp, email and individual texts',
      'Stay ahead of vacant shifts with our open shift management system.',
      'Simple user experience for managers and staff making communication a breeze!',
    ],
    color: 'accent',
    link: '/products/staff',
    image: ProductImage3,
  },
]
