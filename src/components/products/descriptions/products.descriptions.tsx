import classNames from 'classnames'
import Spacing from 'components/global/spacing/index.spacing'
import SplitProductLayout from 'components/shared/layouts/index.split.products'
import Image from 'next/image'
import styles from './index.module.sass'

const ProductsDescription: React.FC<ProductsDescriptionProps> = ({
  title,
  description,
  children,
  image,
  color = 'violet',
  reverse,
  bubbleLeft,
  bubbleRight,
}) => {
  return (
    <SplitProductLayout
      bubbleLeft={bubbleLeft}
      bubbleRight={bubbleRight}
      xlWidth
      reverse={reverse}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
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
    </SplitProductLayout>
  )
}

export default ProductsDescription
