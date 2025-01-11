import Image from 'next/image';

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16`}
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
