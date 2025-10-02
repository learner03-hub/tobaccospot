import SpecialCard from '../components/specialCard.jsx'
import { useState, useEffect } from "react";

function Specials() {
    const [ specials, setSpecials ] = useState([])
    
        useEffect(() => {
            fetch('api/specials')
            .then(res => res.json())
            .then(data => setSpecials(data))
        }, [])

    return (
        <div className="flex flex-col justify-center items-center gap-2 mt-125 bg-black/20 p-4">
            <h1 className='text-gray-100 text-6xl'>Everyday Deals!</h1>
            <p className='text-gray-100 text-6xl'>Visit us now *** Save more!</p>
            <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full max-w-screen-xl'>
                {specials.map(s=> <SpecialCard key={s.id} special={s} />)}
            </div>
            
        </div>
    )
}

export default Specials;