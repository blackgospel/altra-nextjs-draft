import HeroDashboard from 'assets/images/home/hero-dashboard.png'
import Spacing from 'components/global/spacing/index.spacing'
import SplitLayout from 'components/shared/layouts/index.split'
import Image from 'next/image'
import styles from './index.module.sass'

const ProductsDescription: React.FC<ProductsDescriptionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <SplitLayout>
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <p>{description}</p>

        {children && (
          <>
            <Spacing />

            {children}
          </>
        )}
      </div>
      <div className={styles.image_wrapper}>
        <Image src={HeroDashboard} alt="Hero dashboard" />
      </div>
    </SplitLayout>
  )
}

export default ProductsDescription
