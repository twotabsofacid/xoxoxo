import Image from 'next/image';
import { useState } from 'react';
import Landing from '@/components/_landing';
import Recs from '@/components/_recs';
import Rsvp from '@/components/_rsvp';
import Details from '@/components/_details';
import Logistics from '@/components/_logistics';
import FlowerTwo from '@/components/icons/_flowerTwo';

export default function Home() {
  const [page, setPage] = useState('landing');
  const navClick = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.currentTarget.hash.split('#')[1]);
    setPage(e.currentTarget.hash.split('#')[1]);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] md:flex-row">
      <aside className="md:w-[30vw] w-[100vw] md:min-h-[100vh] bg-[#710e20] md:text-4xl text-base flex flex-col justify-center md:p-4 p-2 md:fixed md:left-0 md:top-0">
        <ul className="flex md:flex-col">
          <li className="md:fixed md:top-0 md:left-0 md:p-4">
            <a
              href="#landing"
              className="nav-link text-[#f8f1dc]"
              onClick={navClick}
            >
              <FlowerTwo className="home-icon md:w-[6rem] w-[2rem] h-auto" />
            </a>
          </li>
          <li className="px-2 md:px-0 md:py-4">
            <a
              href="https://registry.theknot.com/brianna-gill-sean-scanlan-june-2025-pa/71411945"
              className="nav-link text-[#f8f1dc]"
              target="_blank"
            >
              Registry
            </a>
          </li>
          <li className="px-2 md:px-0 md:py-4">
            <a
              href="#details"
              className="nav-link text-[#f8f1dc]"
              onClick={navClick}
            >
              Events
            </a>
          </li>
          <li className="px-2 md:px-0 md:py-4">
            <a
              href="#logistics"
              className="nav-link text-[#f8f1dc]"
              onClick={navClick}
            >
              Logistics
            </a>
          </li>
          <li className="px-2 md:px-0 md:py-4">
            <a
              href="#recs"
              className="nav-link text-[#f8f1dc]"
              onClick={navClick}
            >
              Recs
            </a>
          </li>
        </ul>
      </aside>
      <main className="flex relative flex-col w-[100vw] md:w-[70vw] md:left-[15vw] min-h-[100vh]">
        {
          {
            rsvp: <Rsvp />,
            landing: <Landing />,
            recs: <Recs />,
            logistics: <Logistics />,
            details: <Details />
          }[page]
        }
      </main>
    </div>
  );
}
