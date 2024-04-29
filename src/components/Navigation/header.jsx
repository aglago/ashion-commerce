import { useState } from "react"
import PropTypes from 'prop-types';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function toggleMenu() {
    setIsMobileOpen(!isMobileOpen);
    console.log(isMobileOpen);
  }

  return (
    <header className="h-24 shadow flex justify-between align-center  px-10 relative">
      <MobileMenu />
      <Logo />
      <Links />
      <Essentials />
      <Hamburger onClick={toggleMenu} />
    </header>
  )
}

function MobileMenu({isOpen}) {
  return (
    <div className={`block lg:hidden w-50 h-full bg-red-600 z-10 absolute top-0 left-0 ${isOpen ? "block" : "hidden"}`}>
      <h1>Heloo </h1>
    </div>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

function Logo() {
  return (
    <div className="flex items-center justify-center cursor-pointer">
        <img src='/images/logo.png.webp' alt="the logo"/>
    </div>
  )
}

function Links() {
  return (
    <nav className="hidden lg:flex justify-center items-center">
      <ul className="flex gap-5 justify-center items-center uppercase">
        <li className="border-b-[2px] border- border-borderColor"><a href="">Home</a></li>
        <li className=""><a href="">Women&apos;s</a></li>
        <li><a href="">Men&apos;s</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Pages</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

function Essentials() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-5">
      <div>
        <a href="" className="text-gray-500">Login / Register</a>
      </div>
      <div>
        <img src="/images/icons/magnifying-glass.png" alt="" className="w-6 h-6"/>
      </div>
      <div  className="relative">
        <img src="/images/icons/love.png" alt="" className="w-5 h-5"/>
        <div className="absolute h-4 w-4 top-[-8px] right-[-10px] rounded-full bg-black text-white text-[8px] text-center leading-4 font-bold">2</div>
      </div>
      <div className="relative">
        <img src="/images/icons/shopping-bag.png" alt="" className="w-5 h-5"/>
        <div className="absolute h-4 w-4 top-[-8px] right-[-10px] rounded-full bg-black text-white text-[8px] text-center leading-4 font-bold">2</div>
      </div>
    </div>
  )
}

function Hamburger() {
  return (
    <div className="flex justify-center items-center lg:hidden">
      <img src="/images/icons/hamburger.png" alt="" className="h-7 w-7 border-[1px] border-black cursor-pointer"/>
    </div>
  )
}