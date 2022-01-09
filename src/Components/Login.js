import "../App.css";
import {useState, useEffect} from 'react';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [confirmUser, setConfirmUser] = useState();

    useEffect(() => {
        fetch('http://localhost:8000/users')
        .then ((res) => {
            return res.json();
        })
        .then(res => {
            setUser(res)
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(user[0].email, user[0].password)
        console.log(email, password)
        if(email === user[0].email && password === user[0].password){
            setConfirmUser(true)
        } else {
            setConfirmUser(false)
        }
    }

    


    return ( 
        <div className="loginDiv">
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className={!confirmUser ? "incorrect" : ""}
                />
                <label>Password:</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className={!confirmUser ? "incorrect" : ""}
                />
                <button >
                    Submit
                </button>
            </form>
            {!confirmUser ? <p>Incorrect Credentials</p> : <p>...Loading</p>}
        </div>
     );
}
 
export default Login;