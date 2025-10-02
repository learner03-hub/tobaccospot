import {Link } from "react-router-dom"

function ErrorPage() {

    return (
    <div className="flex flex-col mt-10">
        <p className="text-center text-gray-300 text-6xl font-bold">Page not found...</p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
          <button className="text-gray-900 bg-gray-100 text-black font-bold text-xl rounded-md flex items-center justify-center px-4 py-2">
            <Link to="/" className="hover:underline text-green-600">Back to Home</Link>
          </button>
        </div>
      </div>
    );
}

export default ErrorPage;