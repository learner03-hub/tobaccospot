

function FlavorCard({product}) {
    if (!product) {
    console.warn("Invalid product:", product);
    return null;
    }
    const { name, price, description, image_url, category } = product;

    return (
        // <div 
        // className="flex flex-col items-center bg-gray-900 text-white rounded-lg shadow-md w-full max-w-sm mx-auto">
        //   <img
        //     src={image_url}
        //     alt="Backwoods Russian Cream"
        //     className="w-full h-65 rounded-md shadow-lg object-cover"
        //   />
        //   <p className="text-lg font-semibold text-white text-center bg-gray-900 w-full">
        //     {name}
        //   </p>
        // </div>
        <div 
        className="flex justify-center items-center gap-10 bg-gray-600 text-white rounded-lg shadow-md w-full max-w-sm mx-auto p-10">
            <button className="font-bold text-3xl">-</button>
            <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold text-white text-center bg-gray-600 w-full">
            {name}
            </p>
            <span>0</span>
            </div>
            <button className="font-bold text-3xl">+</button>
        </div>
    )
}

export default FlavorCard