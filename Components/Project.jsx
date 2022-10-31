import HoverVideoPlayer from 'react-hover-video-player'

const Project = ({title, subtitle, summary, technologies, url}) => {
  return (
    <div className='flex space-x-24 align-center justify-around min-h-screen pl-12'>
    <div className='hidden 2xl:flex px-[12rem]'>
      <HoverVideoPlayer
      className='z-20 self-center fixed scale-x-[1.85] scale-y-[1.90] pl-8'
      videoSrc={`/vid/${title}Demo.mp4`}
      pausedOverlay= {
        <img src={`/vid/${title}Thumbnail.png`}
             style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
             }}
             className= ' fixed pl-8'
        />
      }
      restartOnPaused
      />
    </div>
    <div className={`flex transition-all items-center cursor-default`}>
        <div className="lg:text-xl space-y-4">
          <p className='lg:text-4xl font-semibold text-blue-600'>{title}</p>
          <p className='lg:text-xl font-light'>{subtitle}</p>
          <div className='hidden md:flex md:flex-col'>
          <p className='text-blue-600'>Summary:</p>
            <p className='w-[70%] lg:w-[40%]  text-justify font-light'>{summary}</p>
          </div>
          <div>
            <p className='text-blue-600'>Built using:</p>
              <ul className=' text-lg font-light'>
                {technologies.map ((tech, index) => <li key={index}>{tech}</li>)}
              </ul>
          </div>
          <div>
            <a href={url} target="_blank" 
            className='text-xl lg:text-5xl font-light text-blue-600 hover:bg-blue-600 hover:text-slate-100 rounded-md transition-all z-100 right-0'>Check it out!</a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Project