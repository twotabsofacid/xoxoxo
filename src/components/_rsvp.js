import { useState } from 'react';
import RsvpText from './text/_rsvpText';
const Rsvp = () => {
  const [rsvpResponse, setRsvpResponse] = useState(405);
  const [rsvpComplete, setRsvpComplete] = useState(false);
  const [isAttending, setIsAttending] = useState(true);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .catch((err) => {
        console.log('ERROR', err);
      })
      .then((res) => {
        console.log('SUCCESS!', res);
        if (res.status === 200) {
          setRsvpResponse(200);
        } else {
          setRsvpResponse(405);
        }
        setRsvpComplete(true);
      });
    // Success and error handling ...
  };
  return (
    <section className="flex flex-col relative p-4 min-h-[100vh]">
      <RsvpText className="w-[100%] h-auto md:mb-12 mb-6" />
      {rsvpComplete ? (
        <>
          <h1 className="text-4xl font-bold mb-6">Thank you!</h1>
          <p>If you're coming, we can't wait to see you!</p>
        </>
      ) : (
        <section className="text-xl">
          <form name="rsvp-form" onSubmit={handleFormSubmit}>
            <input type="hidden" name="form-name" value="rsvp-form" />
            <div className="mb-4">
              <label className="font-bold">
                Name(s)
                <input
                  type="text"
                  name="name"
                  required
                  className="ml-2 font-[500]"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="font-bold">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="ml-2 font-[500]"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="font-bold">
                Phone Number
                <input
                  type="phone"
                  name="phone"
                  required
                  className="ml-2 font-[500]"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="font-bold">
                Attending?
                <select
                  name="attendance"
                  required
                  className="ml-2 font-[500]"
                  onChange={(e) => {
                    console.log('change', e.target.value);
                    if (e.target.value === 'Yes') {
                      setIsAttending(true);
                    } else {
                      setIsAttending(false);
                    }
                  }}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
            {isAttending && (
              <div className="mb-4">
                <label className="font-bold">
                  Number Attending
                  <select name="attendance-number" className="ml-2 font-[500]">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </label>
              </div>
            )}
            <div>
              <button type="submit font-bold">Submit</button>
            </div>
          </form>
        </section>
      )}
    </section>
  );
};

export default Rsvp;
