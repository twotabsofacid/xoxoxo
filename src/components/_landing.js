import { useState, useEffect } from 'react';
import Flower from './icons/_flower';
import FlowerWink from './icons/_flower-wink';
const Landing = () => {
  const [winking, setWinking] = useState(false);
  useEffect(() => {
    console.log('does this even run');
    const wink = setInterval(() => {
      setWinking(true);
      setTimeout(() => {
        setWinking(false);
      }, 500);
    }, 5000);
    return () => clearInterval(wink);
  }, []);
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center">
      {winking ? (
        <FlowerWink className="w-[100%] h-[100%] max-h-[100vh] max-w-[100%]" />
      ) : (
        <Flower className="w-[100%] h-[100%] max-h-[100vh] max-w-[100%]" />
      )}
    </section>
  );
};

export default Landing;
