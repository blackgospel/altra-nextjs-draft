import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import HomeStoriesData from 'data/customers/stories.json'
import TestimonialsData from 'data/testimonial.json'
import StoriesCard from './card/home.stories-card'
import styles from './index.module.sass'

const Stories: React.FC = () => {
  return (
    <Section lgWidth bubbleRight2>
      <div className={styles.container}>
        <h2 className={styles.title}>{HomeStoriesData.title}</h2>

        <Spacing />

        <div className={styles.customer_stories}>
          {TestimonialsData.map(({ name, testimonial }, index) => {
            return (
              <StoriesCard
                key={`customer-stories-${index}`}
                title={name}
                story={testimonial}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Stories
