import SpecialCard from '../components/SpecialCard.jsx'
import { useState, useEffect } from "react";

function Specials() {
    const [ specials, setSpecials ] = useState([])
    
        useEffect(() => {
            fetch(`${import.meta.env.VITE_API_URL}/api/specials`)
            .then(res => res.json())
            .then(data => setSpecials(data))
            
        }, [])

        console.log(specials)

    return (
        <div className="flex flex-col justify-center items-center gap-2 mt-125 bg-black/20 p-4">
            <h1 className='text-gray-100 text-6xl'>Everyday Deals!</h1>
            <p className='text-gray-100 text-6xl'>Visit us now *** Save more!</p>
            <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center w-full max-w-screen-xl mx-auto mt-5'>
                {specials.map(s=> <SpecialCard key={s.id} special={s} />)}
            </div>
            
        </div>
    )
}

export default Specials;