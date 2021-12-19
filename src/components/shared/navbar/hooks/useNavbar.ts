import { useState } from 'react'

const useNavbar = (): UseNavbarType => {
  const [active, setActive] = useState<boolean>(false)

  const handleToggleActive = () => setActive((state) => !state)

  return {
    active,
    handleToggleActive,
  }
}

export default useNavbar
