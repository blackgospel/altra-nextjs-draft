import Head from 'next/head'
import usePage from 'src/hooks/usePage'
import styles from './index.module.sass'

const Page: React.FC<PageProps> = ({
  children,
  title = 'Altra | Improve quality of care through human connections',
}) => {
  const { pageRef, scrollRef } = usePage()

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <div ref={pageRef} className={styles.wrapper}>
        <div ref={scrollRef} className={styles.scroll}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Page
