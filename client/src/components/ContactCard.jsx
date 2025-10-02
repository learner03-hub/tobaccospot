import { MapPinIcon  } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon  } from '@heroicons/react/24/solid';

function ContactCard({iconName, address, text, subText}) {

    const icons = {
    location: <MapPinIcon className="w-6 h-6 text-white" />,
    phone: <PhoneIcon className="w-6 h-6 text-white" />,
    email: <EnvelopeIcon className="w-6 h-6 text-white" />,
    };

    return (
        <div className="flex text-gray-100 gap-5 justify-start items-start p-10 w-full bg-gray-800">
            <button
            className="p-4 w-15 h-15 bg-green-600 text-black font-bold text-xl rounded-md flex items-center justify-center"
            >
            {icons[iconName] || null}
            </button>
            <div className="flex flex-col">
                <p className="font-bold">{address}</p>
                <p>{text}</p>
                <p className="text-gray-400">{subText}</p>

            </div>
        </div>
    )
}

export default ContactCard;