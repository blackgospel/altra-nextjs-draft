import cn from 'classnames'
import Section from 'components/global/section/index.section'
import React from 'react'
import Anime from '../anime/index.anime'
import styles from './index.module.sass'

const SplitProductLayout: React.FC<SplitLayoutProps> = ({
  children,
  reverse,
  xlWidth,
  bubbleRight,
  bubbleLeft,
}) => {
  return (
    <Section
      bubbleLeft2={bubbleLeft}
      bubbleRight2={bubbleRight}
      lgWidth={!xlWidth}
      xlWidth={xlWidth}
    >
      <div
        className={cn([
          styles.split_product_wrapper,
          { [styles.reverse]: reverse },
        ])}
      >
        {React.Children.map(children, (child) => {
          return (
            <div className={styles.split_child}>
              <Anime>{child}</Anime>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default SplitProductLayout
