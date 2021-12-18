import { useEffect, useRef } from 'react'
import useWindowSize from './useWindowSize'

const usePage = () => {
  const pageRef = useRef<HTMLDivElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const size = useWindowSize()

  const scrollConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  const customScroll = () => {
    scrollConfigs.current = window.scrollY
    scrollConfigs.previous +=
      (scrollConfigs.current - scrollConfigs.previous) * scrollConfigs.ease
    scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100

    const difference = scrollConfigs.current - scrollConfigs.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translate3d(0, -${scrollConfigs.rounded}px, 0) skewY(${skew}deg)`
    }

    requestAnimationFrame(() => customScroll())
  }

  useEffect(() => {
    requestAnimationFrame(() => customScroll())
  })

  useEffect(() => {
    if (scrollRef.current) {
      document.body.style.height = `${
        scrollRef.current.getBoundingClientRect().height
      }px`
    }
  }, [size.height])

  return {
    pageRef,
    scrollRef,
  }
}

export default usePage
