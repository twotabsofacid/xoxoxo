import DetailsText from './text/_detailsText';

const Details = () => {
  return (
    <section className="flex flex-col p-4">
      <DetailsText className="w-[100%] h-auto md:mb-12 mb-6" />
      <p className="mb-6">
        We're doing a self uniting marriage (look it up!), so there won't be a
        service. Instead, we'd like to celebrate our love by coming together to
        share a meal with the people we love most.
      </p>
      <div className="mb-6">
        <h3 className="text-4xl mb-4">Welcome at our home</h3>
        <h5 className="font-bold">June 20th</h5>
        <h5 className="font-bold">5-10pm</h5>
        <h5 className="font-bold">307 Barnes Street</h5>
        <h5 className="font-bold">Pittsburgh, PA 15221</h5>
        <p className="mt-2">
          We'll be hosting a welcome gathering at our home. Beer, wine, food
          (pizza? snacks? we'll find out), and music.
        </p>
      </div>
      <div>
        <h3 className="text-4xl mb-4">Celebration at Morcilla</h3>
        <h5 className="font-bold">June 21st</h5>
        <h5 className="font-bold">6-11pm</h5>
        <h5 className="font-bold">3519 Butler Street</h5>
        <h5 className="font-bold">Pittsburgh, PA 15201</h5>
        <p className="mt-2">
          We will see you at Morcilla for drinks and a delicious dinner to
          celebrate our marriage.
        </p>
      </div>
    </section>
  );
};

export default Details;
