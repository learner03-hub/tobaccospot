

function About() {
    return (
        <div className="flex flex-col justify-center items-start p-4 gap-5">
        <div className="flex flex-col justify-center items-center gap-2 mt-0 p-4">
            <p className='text-gray-100 text-6xl font-bold'>About Tobacco Spot</p>
            <p className="text-center text-gray-400 text-xl">
                Your premier destination for luxury smoking accessories and premium tobacco products. We've been serving connoisseurs and enthusiasts with unmatched quality and service.
            </p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2 mt-0 p-4 bg-gray-800">
            <p className='text-gray-100 text-4xl font-bold'>Our Story</p>
            <p className="text-start text-gray-400 text-xl">
                Founded in 2014, Tobacco Spot began as a passion project by tobacco enthusiasts who recognized the need for a premium smoking accessories destination in our community.<br/><br/>

What started as a small local shop has grown into a cornerstone of the smoking culture, known for our carefully curated selection of premium tobacco, artisan pipes, cutting-edge vaporizers, and luxury accessories.<br/> <br/>

We believe that smoking is more than just a habit - it's a culture, a ritual, and an art form. Our mission is to provide our customers with products that enhance their experience and reflect their sophisticated taste.
            </p>
        </div>
        <p className="text-gray-100 text-6xl font-bold text-center w-full">What Sets Us Apart</p>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 w-full">
        <div className="flex flex-col bg-gray-800 justify-center items-center gap-5 mt-0 p-4">
            <button
          className="w-15 h-15 bg-green-600 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
            >
            PQ
            </button>
            <p className='text-gray-100 text-3xl font-bold'>Premium Quality</p>
            <p className="text-center text-gray-400 text-l">
                Only the finest products from trusted brands and artisan craftsmen worldwide
            </p>
        </div>
        <div className="flex flex-col bg-gray-800 justify-center items-center gap-5 mt-0 p-4">
            <button
          className="w-15 h-15 bg-green-600 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
            >
            ES
            </button>
            <p className='text-gray-100 text-3xl font-bold'>Expert Staff</p>
            <p className="text-center text-gray-400 text-l">
                Our knowledgeable team is passionate about helping you find the perfect products
            </p>
        </div>
        <div className="flex flex-col bg-gray-800 justify-center items-center gap-5 mt-0 p-4">
            <button
          className="w-15 h-15 bg-green-600 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
            >
            YE
            </button>
            <p className='text-gray-100 text-3xl font-bold'>10+ Years Experience</p>
            <p className="text-center text-gray-400 text-l">
                Over a decade of serving the smoking community with dedication and expertise
            </p>
        </div>
        <div className="flex flex-col bg-gray-800 justify-center items-center gap-5 mt-0 p-4">
            <button
          className="w-15 h-15 bg-green-600 text-gray-100 font-bold text-xl rounded-md flex items-center justify-center"
            >
            CF
            </button>
            <p className='text-gray-100 text-3xl font-bold'>Community Focused</p>
            <p className="text-center text-gray-400 text-l">
                We're more than a shop - we're part of the local smoking culture and community
            </p>
        </div>
        </div>

        </div>
    )
}

export default About;