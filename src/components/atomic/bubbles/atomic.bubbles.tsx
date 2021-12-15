import BubbleSVG from 'assets/images/bubbles.svg'
import styles from './index.module.sass'

const Bubbles: React.FC = () => {
  return (
    <div className={styles.container}>
      <BubbleSVG />
    </div>
  )
}

export default Bubbles
