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
