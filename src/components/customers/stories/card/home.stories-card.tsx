import { IconArrowRight } from '@tabler/icons'
import StoryImage from 'assets/images/home/hero-dashboard.png'
import Button from 'components/global/button/index.button'
import Icon from 'components/global/icon/index.icon'
import Spacing from 'components/global/spacing/index.spacing'
import Image from 'next/image'
import styles from './index.module.sass'

const StoriesCard: React.FC<CustomerStoriesCardType> = ({
  title,
  story,
  readMore = true,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <Image src={StoryImage} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{story}</p>
      {readMore && (
        <>
          <Spacing />
          <div className={styles.button_wrapper}>
            <Button sm>
              Read More <Icon icon={<IconArrowRight />} />
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default StoriesCard
