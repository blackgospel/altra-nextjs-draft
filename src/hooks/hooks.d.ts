interface UseSwiperType {
  swiper: Swiper
  handleSetSwiper: (swiper: Swiper) => void
  handlePrevSwipe: () => void
  handleNextSwipe: () => void
}

type UseWindowSizeType = FetchSizeResponse

interface FetchSizeResponse {
  width: number
  height: number
}

type FetchSizeType = () => FetchSizeResponse

type HandleResizeType = () => void

interface UsePageType {
  ref: MutableRefObject<HTMLElement | undefined>
  scrollRef: MutableRefObject<HTMLElement | undefined>
}
