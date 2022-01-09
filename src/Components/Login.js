import "../App.css";
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

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
        if(email === user[0].email && password === user[0].password){
            setUser(true)
            navigate('/todo');
        } else {
            setUser(false)
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
                    className={!user ? "incorrect" : ""}
                />
                <label>Password:</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className={!user ? "incorrect" : ""}
                />
                <button >
                    Submit
                </button>
            </form>
            {user ? <p className="wrong">Incorrect Credentials</p> : <p>...Loading</p>}
        </div>
     );
}
 
export default Login;