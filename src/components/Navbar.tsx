import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setDark] = useState(false)
  const firstBar: any = useRef(null)
  const secondBar: any = useRef(null)
  const menu: any = useRef(null)

  const toggleMenu = () => {
    if (!isOpen) {
      firstBar.current.style.transform = 'translate3d(0px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg)'
      secondBar.current.style.transform = 'translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)'
      setIsOpen(true)
    } else {
      firstBar.current.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      secondBar.current.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      setIsOpen(false)
    }

  }

  const setMode = (isDarkMode: boolean) => {
    // mode == '1' ? setDark(true) : setDark(false)
    isDarkMode ? localStorage.setItem('darkMode', '1') : localStorage.setItem('darkMode', '0')
    isDarkMode ? setDark(true) : setDark(false)
  }

  const toggleTheme = () => {
    isDark ? setMode(false) : setMode(true)
  }

  useEffect(() => {
    const initialMode = localStorage.getItem('darkMode')
    if (initialMode) {
      initialMode == '1' ? setDark(true) : setDark(false)
    }
    isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  },[isDark, toggleTheme])


  return (
    <nav className="flex text-center md:text-left md:justify-between py-8 px-6 bg-white dark:bg-neutral-900 items-center w-full">
      <div className="mr-auto">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div
        ref={menu}
        className={`
          md:flex
          ${isOpen ? 'flex' : 'hidden' }
          md:flex-row
          flex-col
          md:relative
          fixed
          md:bg-transparent
          bg-neutral-950
          z-30
          items-center
          md:gap-x-8
          gap-y-6
          md:justify-around
          md:h-auto
          h-screen
          md:text-neutral-800
          text-white
          top-0
          bottom-0
          left-0
          md:pt-0 pt-12
        `}
      >
        <Link to="/portfolio" className="md:text-lg text-2xl dark:text-neutral-100 no-underline md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24">
          Portfolio
        </Link>
        <Link to="/contact" className="md:text-lg text-2xl dark:text-neutral-100 no-underline md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24">
          Contact
        </Link>
        <Link to="/resume" className="md:text-lg text-2xl dark:text-neutral-100 no-underline md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24">
          Resume
        </Link>
        <button
          onClick={toggleTheme}
          className="md:text-lg text-2xl dark:text-neutral-100 md:ml-2 md:pr-0 md:pl-0 pl-8 pr-24"
        >
          { isDark ? 'Dark' : 'Light' }
        </button>
      </div>
      <div className="group ml-auto block md:hidden" role="button" onClick={toggleMenu}>
        <div
          ref={firstBar}
          className="group-hover:bg-gray-600 w-9 h-0.5 my-3 bg-neutral-950 dark:bg-neutral-50 transition-all duration-300"
        ></div>
        <div
          ref={secondBar}
          className="group-hover:bg-gray-600 w-9 h-0.5 my-3 bg-neutral-950 dark:bg-neutral-50 transition-all duration-300"
        ></div>
      </div>
    </nav>
  )
}

export default Navbar