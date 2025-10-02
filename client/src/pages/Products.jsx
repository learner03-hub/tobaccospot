import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"

function Products() {
    const [ products, setProducts ] = useState([])
    const [searchItem, setSearchItem] = useState("")

    useEffect(() => {
        fetch('api/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchItem.toLocaleLowerCase()))
    return (
        <div className="flex flex-col justify-center items-center gap-2 mt-0 bg-black/20 p-4">
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
            {filteredProducts.map(p=>(<ProductCard key={p.id} product={p}/>))}
            </div>
            
        </div>
    )
}

export default Products;