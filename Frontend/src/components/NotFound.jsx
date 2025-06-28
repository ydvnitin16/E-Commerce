// 404.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>
      <Link to="/" className="p-4 bg-black text-white rounded-2xl font-bold mt-5">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
