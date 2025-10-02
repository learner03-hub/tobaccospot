import { MapPinIcon  } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon  } from '@heroicons/react/24/solid';

const Footer = () =>
  
    <footer className="bg-gray-900 text-center p-4 mt-8">
      
        <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full mb-10">
          <div className="flex flex-col bg-gray-900 justify-start items-start gap-5 mt-0 p-4">
            
            <div className="flex justify-center items-start gap-3">
              <button
          className="w-15 h-15 bg-green-600 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
            >
            TS
            </button>
            <p className='text-gray-100 text-3xl font-bold'>Tobacco Spot</p>
            </div>
            <p className="text-center text-gray-400 text-l">
                Premium smoking accessories and tobacco products for the discerning customer
            </p>
        </div>
        <div className="flex flex-col bg-gray-900 justify-start items-start gap-5 mt-0 p-4">
            
            <div className="flex justify-center items-center gap-3">
            <p className='text-gray-100 text-3xl font-bold'>Store Hours</p>
            </div>
            <p className="text-center text-gray-400 text-l">
                Open Daily 8 AM - Midnight
            </p>
        </div>
        <div className="flex flex-col bg-gray-900 justify-start items-start gap-5 mt-0 p-4">
            <div className="flex justify-center items-center gap-3">
            <p className='text-gray-100 text-3xl font-bold'>Contact Info</p>
            </div>
            <div className='flex justify-center items-center'>
              <button
                className="w-10 h-10 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
              >
              <MapPinIcon className="w-6 h-6 text-white" />
              </button>
              <p className="text-center text-gray-400 text-l">
                14737 Kedzie Ave, Posen, IL 60469
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <button
                className="w-10 h-10 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
              >
              <PhoneIcon className="w-6 h-6 text-white" />
              </button>
              <p className="text-center text-gray-400 text-l">
                (708) 328-1293
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <button
                className="w-10 h-10 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
              >
              <EnvelopeIcon className="w-6 h-6 text-white" />
              </button>
              <p className="text-center text-gray-400 text-l">
                tobacco147th@gmail.com
              </p>
            </div>
        </div>
        </div>


      <p className="text-gray-500">&copy; {new Date().getFullYear()} Tobacco Spot. All rights reserved.</p>
    </footer>

export default Footer;
