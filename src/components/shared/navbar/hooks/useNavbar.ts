import { useState } from 'react'

const useNavbar = (): UseNavbarType => {
  const [active, setActive] = useState<boolean>(false)
  const [scrollActive, setScrollActive] = useState<boolean>(false)
  const [subNavActive, setSubNavActive] = useState<boolean>(false)

  const handleToggleActive = () => setActive((state) => !state)

  const handleSubNavToggleActive = () => setSubNavActive((state) => !state)

  const handleSetScrollActive = () => setScrollActive((state) => !state)

  return {
    active,
    subNavActive,
    scrollActive,
    handleSubNavToggleActive,
    handleToggleActive,
    handleSetScrollActive,
  }
}

export default useNavbar
