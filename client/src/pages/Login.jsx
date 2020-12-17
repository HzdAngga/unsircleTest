import { useState } from "react"
import { useHistory } from "react-router"
import axios from 'axios'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {email,password}
        axios({
            url: 'http://localhost:8000/users/login',
            method: 'post',
            data: user
        })
        .then(({data}) => {
            if(data) {
                localStorage.setItem('username', data.name)
                localStorage.setItem('userPolicies', data.userPolicies)
                localStorage.setItem('itemPolicies', data.itemPolicies)
                history.push('/')
            } else {
                console.log('gada');
            }
        })
        .catch( err => console.log(err))
    }
    


    return (
        <div className="d-flex justify-content-center align-items-center" style={{marginTop: "10%"}}>
            <form className="form-signin" onSubmit={(e) => handleSubmit(e)}>
              <div className="d-flex justify-content-center">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmaBaSMrImgeP_RWYFPaW0AVq_EdG7heOr9Q&usqp=CAU" 
                alt="Icon" width="72" height="72"/>
              </div>
              <h1 className="text-center font-weight-normal">Please Log in</h1>
              <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              type="email" 
              id="inputEmail" 
              className="form-control" 
              placeholder="Email address"/>
              <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              id="inputPassword" 
              className="form-control" 
              placeholder="Password"/>
              <br/>
              <div className="d-flex justify-content-center">
                <button className="pressDownButton" type="submit">Login</button>
              </div>
            </form>
        </div>
    )
}

export default Login