import {useEffect, useState} from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect (() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled (true)
            }
            else {
                setIsScrolled (false)
            }
        }
    
        window.addEventListener("scroll", handleScroll)
        }, []) 
  return (
    <header className={`flex fixed items-center justify-between w-screen md:h-8 lg:h-12 space-x-2 p-4 md:px-12 md:py-12 transition-all bg-inherit z-30`}>
        <div className="flex cursor-default space-x-4 hover:text-slate-400 transition-all duration-300">
            <img src="/img/logo.png" alt="logo" width={60} height={60} className={"object-contain p-1 border-2 border-slate-600 rounded-full"}/>
         <div>
            <p className="sm:text-lg md:text-xl lg:text-2xl font-semibold">Nahuel Ferrari</p>
            <p className='text-center sm:text-md md:text-lg lg:text-xl font-extralight'>Web Dev</p>
         </div>
        </div>
    </header>
  )
}

export default Header