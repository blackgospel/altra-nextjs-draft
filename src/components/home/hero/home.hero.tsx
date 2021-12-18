import HeroImage from 'assets/images/home/hero-dashboard.png'
import Button from 'components/global/button/index.button'
import Navbar from 'components/global/navbar/index.navbar'
import Spacing from 'components/global/spacing/index.spacing'
import HomeHeroData from 'data/home/hero.json'
import Image from 'next/image'
import styles from './index.module.sass'

const HomeHero = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{HomeHeroData.title}</h1>
        <p className={styles.description}>{HomeHeroData.description}</p>
        <Spacing />
        <div className={styles.button_wrapper}>
          <Button secondary lg>
            {HomeHeroData.button}
          </Button>
        </div>
        <Spacing />
        <div className={styles.image_wrapper}>
          <div className={styles.image}>
            <Image src={HeroImage} priority={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
