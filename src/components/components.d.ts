interface PageProps {
  title?: string
}

interface ComponentProps {
  className?: string
}

interface ListProps {
  title: string
  list: string[]
}

type IconSizes = 'xs' | 'sm' | 'md' | 'lg'

interface IconProps {
  icon: JSX.Element
  size: IconSizes
}

interface UseNavbarType {
  active: boolean
  handleToggleActive: () => void
}

interface SpacingProps {
  sm?: boolean
  md?: boolean
  lg?: boolean
}

interface ButtonProps {
  className?: string
  secondary?: boolean
  sm?: boolean
  lg?: boolean
}
