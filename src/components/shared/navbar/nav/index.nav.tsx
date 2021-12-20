import { IconChevronDown, IconChevronRight } from '@tabler/icons'
import cn from 'classnames'
import Button from 'components/global/button/index.button'
import SocialLinks from 'data/social-links.json'
import Link from 'next/link'
import React from 'react'
import styles from '../index.module.sass'

const Nav: React.FC<NavProps> = ({ callback, subNavActive }) => {
  return (
    <div className={styles.navbar_wrapper}>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navbar_item}>
          <div onClick={callback} className={styles.item_align}>
            Products <IconChevronDown size={18} style={{ marginLeft: 4 }} />
          </div>
        </li>
        <div
          className={cn([
            styles.sub_navbar_mobile_wrapper,
            { [styles.active]: subNavActive },
          ])}
        >
          <ul className={styles.sub_navbar_list}>
            <li className={styles.list_item}>
              <Link href="/products/wellbeing-hub">
                <span>
                  Wellbeing Hub{' '}
                  <IconChevronRight size={16} style={{ marginLeft: 4 }} />
                </span>
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/products/staff">
                <span>
                  Altra Staff{' '}
                  <IconChevronRight size={16} style={{ marginLeft: 4 }} />
                </span>
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/products/family">
                <span>
                  Altra Family{' '}
                  <IconChevronRight size={16} style={{ marginLeft: 4 }} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <li className={styles.navbar_item}>
          <Link href="/customers">Customers</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.navbar_item}>
          <Button
            sm
            className={styles.navbar_button}
            href={SocialLinks.calendly}
          >
            Book Demo
          </Button>
        </li>
        <li className={styles.navbar_item}>
          <Button
            sm
            className={styles.navbar_button}
            href={SocialLinks.appLogin}
          >
            Login
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Nav
