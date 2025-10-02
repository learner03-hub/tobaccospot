import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

function SpecialCard({special}) {

    if (!special) {
    console.warn("Invalid special:", special);
    return null;
    }
    const { title, discount, details, image_url, oPrice, nPrice } = special;

    const statusClassName = details == 'active!' ? 'italic text-green-300 text-center text-xs mt-auto' : 'italic text-red-600 text-center text-xs mt-auto';

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white rounded-lg shadow-md w-full max-w-sm mx-auto">
            <img
                src={image_url}
                alt="Tobacco Spot"
                className="w-full h-65 rounded-md shadow-lg object-cover"
            />
            <p className="text-2xl font-semibold text-white text-center bg-grayn-900 w-full">
            {title}
            </p>
            <p className="italic text-center text-sm text-gray-100">{discount}</p>
            {oPrice && <div className="flex justify-center items-center"><p className="flex line-through text-red-600">{oPrice}$</p> <ChevronDoubleRightIcon className="h-4 w-8 text-gray-100" /> <p className="text-green-600">{nPrice}$</p> </div>}
            <p className={statusClassName}>{details}</p>
        </div>
    )
}

export default SpecialCard