import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="fixed flex flex-wrap items-center justify-center top-[3vh]">
        <Image
          src="/img/construction.gif"
          alt="Under construction"
          width={480}
          height={100}
          priority
        />
      </header>
      <main className="flex flex-col items-center">
        <Image
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/img/cupid.gif"
          alt="Cupid"
          width={380}
          height={100}
          priority
        />
      </main>
      <footer className="fixed flex flex-wrap items-center justify-center bottom-[3vh]">
        <Image
          src="/img/construction.gif"
          alt="Under construction"
          width={480}
          height={100}
          priority
        />
      </footer>
    </div>
  );
}
