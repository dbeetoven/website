import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

const Header = () => (
  <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
    <Image src="/bitmonspace.psd" alt="Bitmon Space" layout="fill" />
  </Parallax>
)
export default Header
