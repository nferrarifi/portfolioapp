import React from 'react'

const Banner = ({scrollToProject}) => {
/*   const scrollToProject = (project) => {
    switch (project) {
      case ("pokeapp"):
        window.scrollTo ({top: (screen.height), behavior:'smooth'})
        break;
      case ("appflix"):
        window.scrollTo ({top: (screen.height*2), behavior:'smooth'})
        break;
      default:
        break;
    }
  } */
  return (
    <>
    <div className='flex w-screen flex-col items-center justify-center p-12 space-y-8 lg:space-y-20 mt-16 mb-[50vh] cursor-default'>
        <h1 className='text-3xl md:text-6xl lg:px-80 text-center lg:text-8xl font-semibold text-blue-700'>Welcome to my Portfolio!</h1>
        <h2 className='md:text-4xl lg:px-80 text-center lg:text-6xl text-blue-700'>Click on the project you would like to see</h2>
        <div  className='space-y-4 items-center content-center'>
          <ul className='flex space-x-24 content-center items-center text-xl lg:text-3xl font-light'>
            <li><button onClick={() => scrollToProject("pokeapp")}>PokeApp</button></li>
            <li><button onClick={() => scrollToProject("appflix")}>Appflix</button></li>
          </ul>
        </div>
        <p className='z-10 fixed text-center bottom-5 lg:pt-24'>Visit my <a className=' text-blue-700' href='https://github.com/nferrarifi' target={'_blank'}>Github </a>
        or <a className=' text-blue-700' href='mailto:nahuel.ferrarifisicaro@gmail.com'>Contact me!</a>
        </p>
    </div>
    </>
  )
}

export default Banner