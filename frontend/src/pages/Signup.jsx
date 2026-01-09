import {useState} from "react";
import axios from "axios";


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
        <div>
            <h1>Welcome to the Signup page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />  
                <input type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup;