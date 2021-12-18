import Head from 'next/head'
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
      <div className={styles.scroll}>{children}</div>
    </div>
  )
}

export default Page
