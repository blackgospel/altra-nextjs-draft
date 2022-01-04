type ButtonColors = 'secondary' | 'accent' | 'white'

type ButtonTextColors = 'primary' | 'secondary' | 'accent' | 'white' | 'black'

type HeroColors =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'red'
  | 'violet'
  | 'green'

type ListColors =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'on_primary'
  | 'on_secondary'
  | 'on_accent'
  | 'on_surface'

type IconSizes = 'xs' | 'sm' | 'md' | 'lg'

interface PageProps {
  title?: string
}

interface ComponentProps {
  className?: string
}

interface ListProps {
  title: string
  list?: string[]
  serif?: boolean
  color?: ListColors
  fullWidth?: boolean
}

interface IconProps {
  icon: JSX.Element
  size?: IconSizes
  primary?: boolean
  secondary?: boolean
}

interface UseNavbarType {
  active: boolean
  subNavActive: boolean
  scrollActive: boolean
  handleSubNavToggleActive: () => void
  handleToggleActive: () => void
  handleSetScrollActive: () => void
}

interface NavProps {
  callback?: () => void
  subNavActive?: boolean
}

interface UseNavType {
  subNavRef: RefObject<HTMLDivElement>
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
  xlWidth?: boolean
}

interface SpacingProps {
  sm?: boolean
  md?: boolean
  lg?: boolean
}

interface ButtonProps {
  className?: string
  color?: ButtonColors
  textColor?: ButtonTextColors
  sm?: boolean
  lg?: boolean
  onClick?: () => void
  href?: Url
}

interface CardProps {
  className?: string
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  image?: any
}

interface TestimonialCardProps {
  name?: string
  role?: string
  testimonial: string
  company?: string
  index: number
}

interface HeroProps {
  className?: string
  buttonClick?: () => void
  buttonText?: string
  buttonHref?: string
  title?: string
  description?: string
  heroMarginBottom?: boolean
  buttonColor?: ButtonColors
  heroColor?: HeroColors
}

interface HeroBgProps {
  color?: HeroColors
}

interface CompaniesProps {
  readMoreButton?: boolean
}

interface CustomerStoriesCardType {
  title?: string
  story?: string
  name?: string
  role?: string
  company?: string
}

interface ProductsDescriptionProps {
  title?: string
  description?: string
  image?: string | StaticImageData
  color?: 'violet' | 'red' | 'green'
  reverse?: boolean
  bubbleRight?: boolean
  bubbleLeft?: boolean
}

interface SplitLayoutProps {
  reverse?: boolean
  xlWidth?: boolean
  bubbleRight?: boolean
  bubbleLeft?: boolean
}

interface StoriesProps {
  title?: string
  list: any[]
  bubbleRight2?: boolean
  bubbleLeft2?: boolean
}

interface CenteredLayoutProps {
  bubbleLeft?: boolean
  bubbleRight?: boolean
}
