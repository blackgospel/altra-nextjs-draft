import cn from 'classnames'
import React from 'react'
import styles from './index.module.sass'

const List: React.FC<ListProps> = ({
  title,
  list,
  color,
  children,
  serif,
  fullWidth,
}) => {
  const listClassNames = cn([
    styles.container,
    styles.primary,
    {
      [styles.full_width]: fullWidth,
      ...(color && { [styles[color]]: true }),
    },
  ])

  return (
    <div className={listClassNames}>
      <ul className={styles.list}>
        {list ? (
          <>
            {list.map((item, index) => {
              return (
                <li
                  key={`altra-list-${title}-${index}`}
                  className={styles.list_item}
                >
                  <span
                    className={cn([
                      styles.list_text,
                      { [styles.serif]: serif },
                    ])}
                  >
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
