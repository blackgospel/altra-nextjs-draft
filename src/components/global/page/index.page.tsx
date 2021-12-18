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
      {children}
    </div>
  )
}

export default Page
