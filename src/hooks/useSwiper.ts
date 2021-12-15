import { useState } from 'react'
import Swiper from 'swiper'

const useSwiper = (): UseSwiperType => {
  const [swiper, setSwiper] = useState<Swiper>()

  const handleSetSwiper = (swiper: Swiper) => setSwiper(swiper)

  const handlePrevSwipe = () => swiper?.slidePrev()

  const handleNextSwipe = () => swiper?.slideNext()

  return {
    swiper,
    handleSetSwiper,
    handlePrevSwipe,
    handleNextSwipe,
  }
}

export default useSwiper
