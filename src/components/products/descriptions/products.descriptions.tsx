import classNames from 'classnames'
import Spacing from 'components/global/spacing/index.spacing'
import SplitLayout from 'components/shared/layouts/index.split'
import Image from 'next/image'
import styles from './index.module.sass'

const ProductsDescription: React.FC<ProductsDescriptionProps> = ({
  title,
  description,
  children,
  image,
  color = 'violet',
  reverse,
}) => {
  return (
    <SplitLayout reverse={reverse}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {children && (
          <>
            <Spacing sm />

            {children}
          </>
        )}
      </div>
      <div
        className={classNames([
          styles.image_wrapper,
          { ...(color && { [styles[color]]: true }) },
        ])}
      >
        {image && <Image src={image} alt="Hero dashboard" />}
      </div>
    </SplitLayout>
  )
}

export default ProductsDescription
