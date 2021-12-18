import Head from 'next/head'
import styles from './index.module.sass'

const Page: React.FC<PageProps> = ({ children, title = 'Altra' }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {title} | Improve quality of care through human connections
        </title>
      </Head>
      {children}
    </div>
  )
}

export default Page
