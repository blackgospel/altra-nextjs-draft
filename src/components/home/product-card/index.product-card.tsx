import ProductImage from 'assets/images/home/hero-dashboard.png'
import Button from 'components/global/button/index.button'
import Card from 'components/global/card/index.card'
import List from 'components/global/list/index.list'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import HomeProductData from 'data/home/products.json'
import Image from 'next/image'
import styles from './index.module.sass'

const ProductCard: React.FC = () => {
  return (
    <>
      {HomeProductData.map(
        ({ title, description, list, color, link }, index) => {
          return (
            <Section key={`product-card-${title}`} bubbleLeft1={index === 1}>
              <div className={styles.container}>
                <div className={styles.wrapper}>
                  <Card
                    {...(color && {
                      primary: color === 'primary',
                      secondary: color === 'secondary',
                      accent: color === 'accent',
                    })}
                  >
                    <h2 className={styles.headline}>{title}</h2>
                    <p className={styles.subtitle}>{description}</p>

                    <Spacing />

                    <List
                      title="product"
                      list={list}
                      secondary={color === 'secondary'}
                    />

                    <Spacing />

                    <div className={styles.button_wrapper}>
                      <Button href={link} lg secondary={color === 'primary'}>
                        Meet the product
                      </Button>
                    </div>

                    <Spacing />

                    <div className={styles.image_wrapper}>
                      <div className={styles.image}>
                        <Image src={ProductImage} alt={title} />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Section>
          )
        }
      )}
    </>
  )
}

export default ProductCard
