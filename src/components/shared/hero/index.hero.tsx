import cn from 'classnames'
import Button from 'components/global/button/index.button'
import Spacing from 'components/global/spacing/index.spacing'
import Navbar from '../navbar/index.navbar'
import HeroBg from './bg/index.bg'
import styles from './index.module.sass'

const Hero: React.FC<HeroProps> = ({
  children,
  className,
  title,
  description,
  buttonText,
  buttonHref,
  buttonClick,
  heroMarginBottom,
  color,
}) => {
  return (
    <div
      className={cn([
        styles.container,
        className,
        { [styles.hero_lg_mb]: heroMarginBottom },
      ])}
    >
      <HeroBg color={color} />
      <Navbar />
      <div className={styles.wrapper}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
        <Spacing />
        {buttonText && (
          <div className={styles.button_wrapper}>
            <Button
              href={buttonHref}
              secondary={color !== 'secondary'}
              lg
              onClick={buttonClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
        <Spacing />
        {children}
      </div>
    </div>
  )
}

export default Hero
