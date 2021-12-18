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

interface NavMenuType {
  active: boolean
  onClick: () => void
}

interface SectionProps {
  bubbleRight1?: boolean
  bubbleRight2?: boolean
  bubbleRightSmall?: boolean
  bubbleLeft1?: boolean
  bubbleLeft2?: boolean
  bubbleLeftSmall?: boolean
  fullWidth?: boolean
  lgWidth?: boolean
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

interface TestimonialCardProps {
  name?: string
  role?: string
  testimonial: string
  company?: string
}
