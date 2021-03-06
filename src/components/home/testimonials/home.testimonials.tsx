import { IconArrowLeft, IconArrowRight } from '@tabler/icons'
import Button from 'components/global/button/index.button'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import TestimonialsData from 'data/testimonial.json'
import { AppRoutes } from 'routes/routes'
import useSwiper from 'src/hooks/useSwiper'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialCard from './card/testimonial.card'
import styles from './index.module.sass'

SwiperCore.use([Mousewheel, Pagination])

const Testimonials: React.FC = () => {
  const { handleSetSwiper, handleNextSwipe, handlePrevSwipe } = useSwiper()

  return (
    <Section bubbleLeft2>
      <div className={styles.container}>
        <div className={styles.controls}>
          <button className={styles.controls_button} onClick={handlePrevSwipe}>
            <IconArrowLeft />
          </button>
          <button className={styles.controls_button} onClick={handleNextSwipe}>
            <IconArrowRight />
          </button>
          <div className={styles.button_wrapper}>
            <Button href={AppRoutes.CUSTOMERS} color="secondary">
              More customer stories
            </Button>
          </div>
        </div>

        <Spacing />

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
          }}
          onSwiper={(swiper) => handleSetSwiper(swiper)}
        >
          {TestimonialsData.filter(({ home }) => home).map(
            ({ name, role, testimonial, company }, index) => {
              return (
                <SwiperSlide key={name}>
                  <TestimonialCard
                    {...{ name, role, testimonial, company }}
                    index={index}
                  />
                </SwiperSlide>
              )
            }
          )}
        </Swiper>
      </div>
    </Section>
  )
}

export default Testimonials
