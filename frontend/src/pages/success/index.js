import Meta from "../../components/Meta";
import React, { useState, useEffect, useContext } from "react";
import rocket from '../../assets/images/rocket.svg'
import moon from '../../assets/images/moon.webp'

import ThemeContext from '../../ThemeContext';


const RocketAnimation = () => {
  // Calculate the rocket's size based on the screen dimensions on resize
  const [screenWidth, setScreenWidth] = useState(window.screen.width)
  const { theme } = useContext(ThemeContext);

  const getWindowWidth = () => {
    if (window.innerWidth > 1000) {
      setScreenWidth(1000)
    } else {
      setScreenWidth(window.screen.width)
    }
  }

  useEffect(() => {
    getWindowWidth()
    const handleResize = () => {
      getWindowWidth()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  var rocketSize = screenWidth * 0.2
  var moonSize = screenWidth * 0.3

  return (
    <div className="fixed inset-0 w-full h-full grid place-content-center overflow-hidden">
      <div className="rocket-container" style={{ width: screenWidth, height: screenWidth }}>

        <img className="rocket-svg" src={rocket} alt="Rocket" style={{ width: rocketSize, height: rocketSize }} />
      </div>
      <div className="moon-container">
        <img className={`moon-svg ${theme === 'dark' ? 'brightness-50' : 'brightness-110'}`} src={moon} alt="Moon" style={{ width: moonSize, height: moonSize }} />
      </div>
    </div>
  );
};


const Success = () => {

  return (
    <>
      <Meta title='Message Success | Mobile friendly websites, Web design, Web development in Ireland Remote | I am Mobile Friendly' />
      <div className="overflow-hidden -z-1 mb-20 xl:mb-0">
        <RocketAnimation />
        <div className="grid place-content-center h-full">
          <div className="relative flex flex-col text-center justify-items-center h-screen justify-center z-10 px-4">
            <h1 className="mt-4 text-3xl sm:text-5xl max-w-2xl font-extrabold leading-tight text-center font-mono mb-12">
              Your message has been sent successfully!
            </h1>
            <p className="text-2xl font-mono mb-12">
              I will get back to you as soon as possible.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
export default Success
