import Specials from '../components/Specials';
import {Link} from "react-router-dom";

function Home() {
  const ar = '->';

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center w-full gap-2 mt-25 md:mt-48 lg:mt-58">
        <p className="text-center text-gray-300 text-6xl font-bold">Premium</p>
        <p className="text-center text-green-400 text-6xl font-bold">Smoking Experience</p>
        <p className="text-center text-gray-300 text-xl">
          Discover our curated collection of premium tobacco, artisan pipes,
        </p>
        <p className="text-center text-gray-300 text-xl">
          cutting-edge vaporizers, and luxury smoking accessories.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
          <button className="text-gray-900 bg-green-600 text-black font-bold text-xl rounded-md flex items-center justify-center px-4 py-2">
            <Link to="/products" className="hover:underline ">Explore Products {ar}</Link>
          </button>
          <button className="text-green-600 bg-gray-300 text-black font-bold text-xl rounded-md flex items-center justify-center px-4 py-2">
            <Link to="/contact" className="hover:underline ">Visit Us</Link>
          </button>
        </div>

        {/* Address and Hours */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5 text-center">
          <p className="text-gray-400">14737 Kedzie Ave, Posen, IL 60469</p>
          <p className="text-gray-400">Open daily 8 AM - Midnight</p>
        </div>
      </div>

      <Specials />
    </div>
  );
}

export default Home;
