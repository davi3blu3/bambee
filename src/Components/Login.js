import "../App.css";


const Login = () => {
    return ( 
        <div className="loginDiv">
            <form className="loginForm">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Login;