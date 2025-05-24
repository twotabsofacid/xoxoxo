import DetailsText from './text/_detailsText';

const Details = () => {
  return (
    <section className="flex flex-col p-4">
      <DetailsText className="w-[100%] h-auto md:mb-12 mb-6" />
      <p className="mb-6">
        We're doing a self uniting marriage, so there won't be a service.
        Instead, we'd like to celebrate our union by coming together to share a
        meal with the people we love.
      </p>
      <div className="mb-6 w-[100%] md:w-[80%]">
        <h3 className="text-4xl mb-4">Welcome at our home</h3>
        <h5>
          <span className="font-bold">Date: </span>June 20th
        </h5>
        <h5>
          <span className="font-bold">Time: </span>5-10pm
        </h5>
        <h5>
          <span className="font-bold">Address: </span>307 Barnes Street
        </h5>
        <h5>
          <span className="font-bold">Attire: </span>Cocktail
        </h5>
        <h5>
          <span className="font-bold">Details: </span>We'll be hosting a welcome
          gathering at our home. There will be wine, beer, seltzer, snacks, and
          music. This event will include friends from Pittsburgh.
        </h5>
      </div>
      <div className="w-[100%] md:w-[80%]">
        <h3 className="text-4xl mb-4">Celebration at Morcilla</h3>
        <h5>
          <span className="font-bold">Date: </span>June 21st
        </h5>
        <h5>
          <span className="font-bold">Time: </span>6-11pm
        </h5>
        <h5>
          <span className="font-bold">Address: </span>3519 Butler Street
        </h5>
        <h5>
          <span className="font-bold">Attire: </span>Cocktail
        </h5>
        <h5>
          <span className="font-bold">Details: </span>We will see you at
          Morcilla for drinks and a delicious dinner to celebrate our marriage.
          This will be a more intimate event with family and close friends.
        </h5>
      </div>
    </section>
  );
};

export default Details;
