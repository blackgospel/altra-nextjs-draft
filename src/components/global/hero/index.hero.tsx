import cn from 'classnames'
import Button from '../button/index.button'
import Navbar from '../navbar/index.navbar'
import Spacing from '../spacing/index.spacing'
import HeroBg from './bg/index.bg'
import styles from './index.module.sass'

const Hero: React.FC<HeroProps> = ({
  children,
  className,
  title,
  description,
  buttonText,
  buttonClick,
  heroMarginBottom,
}) => {
  return (
    <div
      className={cn([
        styles.container,
        className,
        { [styles.hero_lg_mb]: heroMarginBottom },
      ])}
    >
      <HeroBg />
      <Navbar />
      <div className={styles.wrapper}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {description && <p className={styles.description}>{description}</p>}
        <Spacing />
        {buttonText && (
          <div className={styles.button_wrapper}>
            <Button secondary lg onClick={buttonClick}>
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
