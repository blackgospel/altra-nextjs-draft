import { useState } from 'react'

const useNavbar = (): UseNavbarType => {
  const [active, setActive] = useState<boolean>(false)
  const [subNavActive, setSubNavActive] = useState<boolean>(false)

  const handleToggleActive = () => setActive((state) => !state)

  const handleSubNavToggleActive = () => setSubNavActive((state) => !state)

  return {
    active,
    subNavActive,
    handleSubNavToggleActive,
    handleToggleActive,
  }
}

export default useNavbar
