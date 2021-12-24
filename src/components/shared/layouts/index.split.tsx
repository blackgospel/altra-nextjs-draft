import cn from 'classnames'
import Section from 'components/global/section/index.section'
import React from 'react'
import styles from './index.module.sass'

const SplitLayout: React.FC<SplitLayoutProps> = ({ children, reverse }) => {
  return (
    <Section lgWidth>
      <div
        className={cn([styles.split_wrapper, { [styles.reverse]: reverse }])}
      >
        {React.Children.map(children, (child) => {
          return <div className={styles.split_child}>{child}</div>
        })}
      </div>
    </Section>
  )
}

export default SplitLayout
