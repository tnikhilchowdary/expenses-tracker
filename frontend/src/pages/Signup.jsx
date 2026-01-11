import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = axios.post("http://localhost:5000/users", {
                name,
                email,
                password
            });
            alert("Signup Success");
            console.log("Signup Success", res.data);
        }
        catch(error){
            console.log("Error in Submitting Signup Form");
        }
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Signup
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                 Already have an account?{" "}
                <Link to="/" className="text-green-600 font-medium hover:underline">
                Login here
                </Link>
                </p>
                </div>
        </div>
    )
}

export default Signup;
