import HeroImage from 'assets/images/home/hero-family.png'
import Hero from 'components/shared/hero/index.hero'
import HomeHeroData from 'data/home/hero.json'
import SocialData from 'data/social-links.json'
import Image from 'next/image'
import styles from './index.module.sass'

const HomeHero: React.FC = () => {
  return (
    <Hero
      title={HomeHeroData.title}
      description={HomeHeroData.description}
      buttonText={HomeHeroData.button}
      heroMarginBottom
      buttonHref={SocialData.calendly}
    >
      <div className={styles.image_wrapper}>
        <Image src={HeroImage} priority={true} />
      </div>
    </Hero>
  )
}

export default HomeHero
