import cn from 'classnames'
import styles from './index.module.sass'

const List: React.FC<ListProps> = ({ title, list }) => {
  return (
    <div className={cn([styles.container])}>
      <ul className={styles.list}>
        {list.map((item, index) => {
          return (
            <li
              key={`altra-list-${title}-${index}`}
              className={styles.list_item}
            >
              <span className={styles.list_text}>
                <p className={styles.text}>{item}</p>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
