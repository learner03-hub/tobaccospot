

function ProductCard({product}) {
    if (!product) {
    console.warn("Invalid product:", product);
    return null;
    }
    const { name, price, description, image_url, category } = product;

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white rounded-lg shadow-md w-full max-w-sm mx-auto">
          <img
            src={image_url}
            alt="Backwoods Russian Cream"
            className="w-full h-65 rounded-md shadow-lg object-cover"
          />
          <p className="text-lg font-semibold text-white text-center bg-gray-900 w-full">
            {name} for <span className="text-green-300 font-bold">{price}$</span>
          </p>
           <p className="italic text-gray-300 text-center">{description}</p>
        </div>
    )
}

export default ProductCard