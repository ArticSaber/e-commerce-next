import styles from '../styles/page.module.css'
import products from '@/components/products'

export default function Home() {
  return (
    <main className={styles.main}>
      <products/>
    </main>
  )
}
