import Meta from "../../components/Meta";
import React, { useState, useEffect } from 'react';

const Spinner = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const spin = {
    animation: `spin ${matches ? '3s' : '1.5s'} linear infinite`,
  }
  return (
    <div style={spin} className="absolute inset-x-0 bottom-0 mb-12 z-0 max-w-7xl mx-auto">
      <img src={require('../../assets/images/rocket.webp')} alt="paper-plane" className="w-32 h-96" />
    </div>
  )
}

const Success = () => {

  const spin = {
    animation: 'spin 4s linear infinite',
  }

  return (
    <>
      <Meta title='Message Success | Mobile friendly websites, Web design, Web development in Ireland | Drogheda, Dublin & Remote | I am Mobile Friendly' />
      <div className="relative min-h-screen overflow-hidden -z-1">

        <Spinner />
        <div className="absolute inset-0 grid place-content-center">
          <div className="container relative flex flex-col text-center justify-items-center h-screen justify-center mt-40 z-10 px-4">
            <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center font-mono mb-12">
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
