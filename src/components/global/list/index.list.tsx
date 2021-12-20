import cn from 'classnames'
import React from 'react'
import styles from './index.module.sass'

const List: React.FC<ListProps> = ({
  title,
  list,
  secondary,
  accent,
  children,
}) => {
  return (
    <div
      className={cn([
        styles.container,
        { [styles.secondary]: secondary, [styles.accent]: accent },
      ])}
    >
      <ul className={styles.list}>
        {list ? (
          <>
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
          </>
        ) : (
          <>
            {React.Children.map(children, (child, index: number) => {
              return (
                <li
                  key={`altra-list-${title}-${index}`}
                  className={styles.list_item}
                >
                  <span className={styles.list_text}>{child}</span>
                </li>
              )
            })}
          </>
        )}
      </ul>
    </div>
  )
}

export default List
