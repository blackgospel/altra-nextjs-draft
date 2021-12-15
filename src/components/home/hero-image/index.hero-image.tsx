import HeroDashboardImage from 'assets/images/home/hero-dashboard.png'
import Image from 'next/image'
import styles from './index.module.sass'

const HeroImage = () => {
  return (
    <div className={styles[`hero-image-wrapper`]}>
      <div className={styles[`image-wrapper`]}>
        <Image priority={true} src={HeroDashboardImage} alt="hero-image" />
      </div>
    </div>
  )
}

export default HeroImage
