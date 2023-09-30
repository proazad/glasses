import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-[300px] font-bold'>
                4<span className="text-red-600">0</span>4
            </h1>

            <h2 className='text-5xl font-bold'>
                NOT FOUND
            </h2>
            <Link to="/" className="text-blue-500 underline">Back to Home</Link>
        </div>
    );
};

export default NotFound;