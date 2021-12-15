import HeroImage from 'components/home/hero-image/index.hero-image'
import Head from 'next/head'
import Header from '../header/index.header'
import styles from './index.module.sass'

const Page: React.FC<PageProps> = ({
  children,
  title = 'Altra | Improve quality of care through human connections',
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <HeroImage />
      {children}
    </div>
  )
}

export default Page
