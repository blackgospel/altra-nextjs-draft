import HeroImage from 'assets/images/home/hero-family.png'
import Hero from 'components/shared/hero/index.hero'
import SocialData from 'data/social-links.json'
import Image from 'next/image'
import styles from './index.module.sass'

const HomeHero: React.FC = () => {
  return (
    <Hero
      title="Improve resident wellbeing in your care home"
      description="Altra’s easy to use platform helps nursing and care homes deliver on their promise of providing meaningful, person-centred care for all residents. "
      heroMarginBottom
      buttonText="Book a Demo"
      buttonHref={SocialData.calendly}
    >
      <div className={styles.image_wrapper}>
        <Image src={HeroImage} priority={true} />
      </div>
    </Hero>
  )
}

export default HomeHero
