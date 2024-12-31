import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='capitalize'>
        <ul className='flex items-center justify-between px-2 text-xl'>
            <Link to={''}>
                <li>feutures</li>
            </Link>
            <Link to={''}>
                <li>pricing</li>
            </Link>
            <li>
                <img src='/public/images/xora.svg' alt='logo' />
            </li>
            <Link to={''}>
                <li>faq</li>
            </Link>
            <li>
            <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </li>
            <Link to={''}>
                <li>download</li>
            </Link>
            
        </ul>
    </nav>
  )
}

export default Header