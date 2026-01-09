import {useState} from "react";
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <h1>Welcome to the Signup page</h1>
            <form>
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