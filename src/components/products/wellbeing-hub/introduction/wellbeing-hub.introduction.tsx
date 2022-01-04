import ProductImage from 'assets/images/home/hero-wellbeing.png'
import SplitProductLayout from 'components/shared/layouts/index.split.products'
import Image from 'next/image'
import styles from './index.module.sass'

const WellbeingHubIntroduction: React.FC = () => {
  return (
    <SplitProductLayout reverse bubbleLeft>
      <div className={styles.container}>
        <h2 className={styles.title}>What is the</h2>
        <h2 className={styles.title}>Wellbeing Hub?</h2>
        <p className={styles.content}>
          We partner with experts in active ageing, dementia care & more to
          produce state-of-the-art exercise videos and wellness resources
          specifically designed to improve the lives of older adults in care
          homes and at home. This one-of-a-kind expert programming is available
          effortlessly on any device.
        </p>
      </div>
      <Image src={ProductImage} alt="What is wellbeing hub" />
    </SplitProductLayout>
  )
}

export default WellbeingHubIntroduction
