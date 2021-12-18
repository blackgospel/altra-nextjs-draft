interface UseSwiperType {
  swiper: Swiper
  handleSetSwiper: (swiper: Swiper) => void
  handlePrevSwipe: () => void
  handleNextSwipe: () => void
}

interface WindowSize {
  width: number
  height: number
}

type UseWindowSizeType = WindowSize

type HandleResizeType = void

interface UsePageType {
  pageRef: MutableRefObject<HTMLElement | undefined>
  scrollRef: MutableRefObject<HTMLElement | undefined>
}
