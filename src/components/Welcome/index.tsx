import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import styles from './styles.module.scss'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <Parallax key={1} tagOuter="figure">
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Welcome to Bitmon Space</h1>
          <h3 className={styles.subTitle}> Digital Metaverse coming soon. </h3>
        </div>
        <div className={styles.illustration}>
          <Image
            src="/assets/bitmonspace.webp"
            alt="Bitmon Space"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </Parallax>
    </div>
  )
}

export default Welcome
