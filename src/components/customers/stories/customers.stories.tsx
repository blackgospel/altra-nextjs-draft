import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import Anime from 'components/shared/anime/index.anime'
import StoriesCard from './card/customers.stories-card'
import styles from './index.module.sass'

const Stories: React.FC<StoriesProps> = ({
  title,
  list,
  bubbleLeft2,
  bubbleRight2,
}) => {
  return (
    <Section lgWidth bubbleLeft2={bubbleLeft2} bubbleRight2={bubbleRight2}>
      <Anime>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>

          <Spacing />

          <div className={styles.customer_stories}>
            {list.map(({ name, testimonial, role, company }, index) => {
              return (
                <StoriesCard
                  key={`customer-stories-${index}`}
                  title={name}
                  story={testimonial}
                  role={role}
                  company={company}
                />
              )
            })}
          </div>
        </div>
      </Anime>
    </Section>
  )
}

export default Stories
