import Image from 'next/image';

export default function Home() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    // Success and error handling ...
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <Image
        className="fixed top-[1em] right-[1em]"
        src="/img/cupid.gif"
        alt="Cupid"
        width={190}
        height={50}
        priority
      />
      <header className="flex flex-wrap items-center justify-center my-[3vh]">
        <Image
          src="/img/construction.gif"
          alt="Under construction"
          width={480}
          height={100}
          priority
        />
      </header>
      <main className="flex flex-col items-center">
        <section className="font-bold text-xl">
          <h1 className="text-4xl mb-4">RSVP</h1>
          <form name="rsvp-form" onSubmit={handleFormSubmit}>
            <input type="hidden" name="form-name" value="rsvp-form" />
            <div className="mb-4">
              <label>
                Name:{' '}
                <input type="text" name="name" required className="ml-2" />
              </label>
            </div>
            <div className="mb-4">
              <label>
                Email:{' '}
                <input type="email" name="email" required className="ml-2" />
              </label>
            </div>
            <div className="mb-4">
              <label>
                Phone Number:{' '}
                <input type="phone" name="email" required className="ml-2" />
              </label>
            </div>
            <div className="mb-4">
              <label>
                Attending?
                <select name="attendance" required className="ml-2">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </main>
      <footer className="flex flex-wrap items-center justify-center my-[3vh]">
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
