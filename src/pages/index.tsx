import About from '@/components/About'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <About/>
    </Layout>
  )
}

export default Home
