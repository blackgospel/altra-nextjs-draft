interface PageProps {
  title?: string
}

interface ComponentProps {
  className?: string
}

interface ListProps {
  title: string
  list: string[]
  accent?: boolean
  secondary?: boolean
}

type IconSizes = 'xs' | 'sm' | 'md' | 'lg'

interface IconProps {
  icon: JSX.Element
  size?: IconSizes
  primary?: boolean
  secondary?: boolean
}

interface UseNavbarType {
  active: boolean
  handleToggleActive: () => void
}

interface SectionProps {
  bubbleRight?: boolean
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

interface CardProps {
  className?: string
  primary?: boolean
  secondary?: boolean
  accent?: boolean
}

interface HomeProductCardProps {}
