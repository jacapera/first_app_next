import Link from 'next/link'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`${style.nav}`}>
      <ul className={`${style.ul}`}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/posts'}>Posts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar