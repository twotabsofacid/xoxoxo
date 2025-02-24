import Fork from './icons/_fork';
import Cocktail from './icons/_cocktail';
import Coffee from './icons/_coffee';
import Beer from './icons/_beer';
import Art from './icons/_art';
import Fish from './icons/_fish';
import Music from './icons/_music';
import Tree from './icons/_tree';
import Book from './icons/_book';
import Pizza from './icons/_pizza';
import Bagel from './icons/_bagel';
import Pastry from './icons/_pastry';
import Bird from './icons/_bird';
import RecsText from './text/_recsText';

const Recs = () => {
  return (
    <section className="flex flex-col p-4">
      <RecsText className="w-[100%] h-auto md:mb-12 mb-6" />
      <ul className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-[100%]">
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Coffee className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Constellation Coffee</h1>
          <p>Best coffee shop in Pittsburgh. Amazing pour over and espresso.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Pastry className="h-[2em] w-auto" />
            <Coffee className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Madeleine Bakery</h1>
          <p>
            Incredible baked goods, bread, and sandwiches. Get there early
            because they run out.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Book className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Cozy Corner Bookstore</h1>
          <p>
            Bookstore with a very well curated selection, amazing owners, and a
            cute cat.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Fork className="h-[2em] w-auto" />
            <Cocktail className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Kelly's Bar & Lounge</h1>
          <p>
            Dive bar with solid food and good drinks. It's also non-smoking.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Bagel className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Pigeon Bagels</h1>
          <p>The only good bagels in Pittsburgh.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Art className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Carnegie Museum</h1>
          <p>
            Good permanent collection and it's never very crowded. Stare at a
            Monet for as long as you please.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Fork className="h-[2em] w-auto" />
            <Cocktail className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Fet Fisk</h1>
          <p>Nordic inspired seafood restaurant with good cocktails.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Bird className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">National Aviary</h1>
          <p>See some birds. Lots of birds here.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Music className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Rock Room</h1>
          <p>Amazing punk venue. Warning: smoking bar.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Cocktail className="h-[2em] w-auto" />
            <Fish className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Tina's</h1>
          <p>Cute cocktail bar with a selection of tinned fish.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Coffee className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">KLVN Coffee Lab</h1>
          <p>Good coffee (not as good as Constellation).</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Fork className="h-[2em] w-auto" />
            <Beer className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">D's Six Pax and Dogz</h1>
          <p>Spot to get a beer and a dog.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Pizza className="h-[2em] w-auto" />
            <Beer className="h-[2em] w-auto" />
            <Cocktail className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Lorelei</h1>
          <p>
            Pizza, beer, cocktails (after 5pm), plus coffee shop (before 5pm).
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Book className="h-[2em] w-auto" />
            <Art className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Bottom Feeder Books</h1>
          <p>
            Bookstore specializing in art books and philosophy. They also have a
            little gallery in back.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Art className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Troy Hill Art Houses</h1>
          <p>
            Four whole house art installations. Call ahead to reserve a time to
            visit.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Tree className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Frick Park</h1>
          <p>Largest park in Pittsburgh—good for hikes and bird watching.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Coffee className="h-[2em] w-auto" />
            <Pastry className="h-[2em] w-auto" />
            <Fork className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Bloomfield Saturday Market</h1>
          <p>
            Farmer's market that runs every saturday during the summer. Nice
            selection of snacks and drinks.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Fork className="h-[2em] w-auto" />
            <Cocktail className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Apteka</h1>
          <p>
            Vegan Polish restaurant with good wine selection and cocktails.{' '}
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Fork className="h-[2em] w-auto" />
            <Beer className="h-[2em] w-auto" />
            <Cocktail className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Point Brugge</h1>
          <p>Belgian restaurant with great mussels and fries.</p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Art className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">St Anthony's Lyceum</h1>
          <p>
            The largest collection of Relics outside of the Vatican. Tiny pieces
            of skin, hair, etc. and so on.
          </p>
        </li>
        <li className="border border-[#710e20] relative lg:p-4 md:p-3 p-2">
          <div className="grid grid-flow-row grid-cols-3 gap-4 w-[100%] mb-4">
            <Pizza className="h-[2em] w-auto" />
            <Pastry className="h-[2em] w-auto" />
          </div>
          <h1 className="font-bold">Mancini's Bread Co.</h1>
          <p>
            Experience all Appalachia has to offer by getting a pizza roll here.
            Walk around the Strip District after.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Recs;
