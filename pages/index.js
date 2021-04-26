import HeadWithMetas from '@io/components/head/head'
import JSONLD from '@io/lib/jsonld'
import styles from '@io/styles/Home.module.css'
import Layout from '@io/components/Layout'
import About from '@io/components/about'
import Background from '@io/components/about/Background'

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
