import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <h1>Welcome to the Login page</h1>
            <form>
                <input type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                />
                <input type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;