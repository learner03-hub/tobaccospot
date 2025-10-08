import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"

function Products() {
    const [ products, setProducts ] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [visibleCount, setVisibleCount] = useState(30)
    const [clicked, setClicked] = useState(false)
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchItem.toLocaleLowerCase())).slice(0, visibleCount);
    return (
        <>
        {!clicked && <div
        className="flex flex-col justify-center items-center gap-2 mt-0 bg-black/20 p-4">
            <p className='text-gray-100 text-6xl font-bold'>Our Collection</p>
            <p className="text-center text-green-500 text-xl">
                Discover our complete range of products
            </p>
            <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 text-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-100"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            />
            <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full max-w-screen-xl'>
            {filteredProducts.map(p=>(<ProductCard onClick={()=> {setProduct(p); setClicked(true); console.log('clicked')}} key={p.id} product={p}/>))}
            </div>
            {visibleCount < products.length && 
            <button
            onClick={() => setVisibleCount(prev => prev + 30)}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >Explore more</button>
            }
            
        </div>}
        {clicked && <ProductDetails setClicked={setClicked} p={product} />}
        </>
    )
}

export default Products;

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import FlavorCard from "../components/FlavorCard";

function ProductDetails({setClicked, p}) {
    const { name, price, description, image_url, category } = p;
    return (
        <div className="m-2">
            <button
            onClick={()=> setClicked(false)}
            className="text-gray-100"
            >
                <ArrowLeftIcon className="w-5 h-5 m-5" />
            </button>
            <img
            src={image_url}
            alt="Backwoods Russian Cream"
            className="w-full h-65 rounded-md shadow-lg object-cover"
          />
          <p className="text-lg font-semibold text-white text-center bg-gray-900 w-full">
            {name} <span className="text-green-300 font-bold">{price}$</span>
          </p>
           <p className="italic text-gray-300 text-center">{description}</p>
           <div className='flex flex-col gap-3 mt-5 text-gray-100 text-center'>
            Add items for pickup below
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <FlavorCard product={p}/>
            <button className="bg-green-600 p-5 rounded">Confirm</button>
            </div>
        </div>
    )
}