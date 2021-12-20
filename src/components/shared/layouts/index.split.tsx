import Section from 'components/global/section/index.section'
import React from 'react'
import styles from './index.module.sass'

const SplitLayout: React.FC = ({ children }) => {
  return (
    <Section lgWidth>
      <div className={styles.split_wrapper}>
        {React.Children.map(children, (child) => {
          return <div className={styles.split_child}>{child}</div>
        })}
      </div>
    </Section>
  )
}

export default SplitLayout
