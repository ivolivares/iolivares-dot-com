import HeadWithMetas from '../components/head/head'
import JSONLD from '../common/jsonld'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import About from '../components/about'
import Background from '../components/about/Background'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadWithMetas />
      <Layout>
        <About />
        <Background />
      </Layout>
      <JSONLD />
    </div>
  )
}
