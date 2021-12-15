import Section from 'components/global/section/index.section'
import TestimonialsData from 'data/testimonial.json'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialCard from './card/testimonial.card'
import styles from './index.module.sass'

SwiperCore.use([Mousewheel, Pagination])

const Testimonials: React.FC = () => {
  return (
    <Section altColor>
      <div className={styles.container}>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={10}
          mousewheel={{ forceToAxis: true }}
          grabCursor={true}
          className={styles.swiper}
          breakpoints={{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1160': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {TestimonialsData.map(({ name, role, testimonial, company }) => {
            return (
              <SwiperSlide key={name}>
                <TestimonialCard {...{ name, role, testimonial, company }} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Section>
  )
}

export default Testimonials
