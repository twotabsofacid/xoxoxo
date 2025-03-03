import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Flower from './icons/_flower';
import FlowerWink from './icons/_flower-wink';
const Landing = () => {
  const [winking, setWinking] = useState(false);
  const [colorShader, setColorShader] = useState('color-3');
  const counterRef = useRef(0);
  useEffect(() => {
    // const blink = setInterval(() => {
    //   counterRef.current++;
    //   setColorShader(`color-${(counterRef.current + 1) % 4}`);
    // }, 500);
    const wink = setInterval(() => {
      setWinking(true);
      setTimeout(() => {
        setWinking(false);
      }, 1000);
    }, 5000);
    return () => {
      clearInterval(wink);
      // clearInterval(blink);
    };
  }, []);
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden">
      {winking ? (
        <FlowerWink className="w-[100%] h-[100%] max-h-[100vh] max-w-[100%]" />
      ) : (
        <Flower className="w-[100%] h-[100%] max-h-[100vh] max-w-[100%]" />
      )}
      {colorShader === 'color-3' ? (
        <Image
          src="/img/scan-final.png"
          width={2012}
          height={1500}
          priority
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] min-h-[100vh] h-auto z-[-1] object-cover"
          alt="Brianna and Sean"
        />
      ) : (
        <Image
          src="/img/dither-225-atkinson.png"
          width={2012}
          height={1500}
          priority
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] min-h-[100vh] h-auto z-[-1] object-cover"
          alt="Brianna and Sean"
        />
      )}
      <div
        className={`absolute top-0 left-0 w-[100%] h-[100%] z-[-2] ${colorShader}`}
      ></div>
    </section>
  );
};

export default Landing;
