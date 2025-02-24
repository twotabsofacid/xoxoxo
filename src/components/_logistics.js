import LogisticsText from './text/_logisticsText';

const Logistics = () => {
  return (
    <section className="flex flex-col p-4">
      <LogisticsText className="w-[100%] h-auto md:mb-12 mb-6" />
      <div>
        <h3 className="text-4xl mb-4">Overview</h3>
        <p>
          Stuff is happening in two locations: our home (Regent Square), and
          Morcilla (Lawrenceville). Staying in or around either of these
          neighborhoods, or somewhere in between, is probably best. But it's a
          free country (ha ha), you can do whatever you like. This list isn't
          exhaustive, but here's some suggestions.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-4xl mb-4">Hotels</h3>
        <ul>
          <li className="mb-2">
            <a
              href="https://kasa.com/properties/kasa-the-maverick-pittsburgh"
              target="_blank"
              className="underline decoration-2"
            >
              The Maverick by Kasa
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.ihg.com/hotelindigo/hotels/us/en/pittsburgh/pithb/hoteldetail"
              target="_blank"
              className="underline decoration-2"
            >
              Hotel Indigo (East End)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.tryppittsburgh.com/"
              target="_blank"
              className="underline decoration-2"
            >
              TRYP Pittsburgh
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://innonnegley.com/"
              target="_blank"
              className="underline decoration-2"
            >
              The Inn on Negley
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-4xl mb-4">Short Term Rentals</h3>
        <p>
          If you rent an Airbnb or Vrbo or whatever we'd recommend staying in
          Regent Square or Lawrenceville, as this would put you walking distance
          from either our home or the restaurant.
        </p>
      </div>
    </section>
  );
};

export default Logistics;
