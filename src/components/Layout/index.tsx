import { ReactNode } from 'react'
import styles from './styles.module.scss';

type Props = {
  children?: ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <div>{children}</div>
    </main>
  )
}

export default Layout
