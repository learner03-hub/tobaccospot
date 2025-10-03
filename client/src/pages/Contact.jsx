import ContactCard from "../components/ContactCard";


function Contact() {
    return (
        <div className="flex flex-col justify-center items-start p-4 gap-5">
        <div className="flex flex-col justify-center items-center gap-2 mt-0 p-4">
            <p className='text-gray-100 text-6xl font-bold'>Contact us or visit our store</p>
            <p className="text-center text-gray-400 text-xl">
                Come experience our premium collection in person. Our knowledgeable staff is ready to help you find exactly what you're looking for.
            </p>
        </div>
        <div className='flex flex-col w-full justify-center items-start gap-3'>
                <ContactCard iconName='location' address='Address' text='14737 S Kedzie Ave,' subText='Posen, IL 60469'/>
                <ContactCard iconName='phone' address='Phone' text='(708) 886-5204' subText='Call us anytime during business hours'/>
                <ContactCard iconName='email' address='Email' text='tobacco147th@gmail.com' subText="We'll respond within 24 hours"/>
        </div>
        <div className="relative w-full flex justify-center items-center">
            <img
                className="rounded"
                src="https://as2.ftcdn.net/jpg/01/53/58/07/1000_F_153580737_r7r01BUQMribWyffcvn6ZT2PA52Ut5ab.jpg"
                alt="Map"
            />
            <a
                href="https://maps.app.goo.gl/UNLUQGLZkuP7woRz6"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-green-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-green-700 h-15 flex items-center justify-center"
            >
            Get Directions
            </a>
        </div>
        </div>
    )
}

export default Contact;