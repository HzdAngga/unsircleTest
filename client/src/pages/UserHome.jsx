import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { fetchUser } from "../store/actions/index"


function UserHome() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { users, isLoading } = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <>
        {isLoading ? <h1>Loading...</h1> : 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand"> Welcome, {localStorage.getItem('username')}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/users">Home</a>
                    <a className="nav-link" href="users/add">Add</a>
                    <a className="nav-link" href="/items">Items</a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="d-flex justify-content-center">
              <table className="table table-striped" style={{marginTop: "100px", maxWidth: "800px"}}>
                <thead>
                  <tr className="text-center">
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">User Policies</th>
                    <th scope="col">Item Policies</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                        <tr className="text-center">
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.userPolicies.join(', ')}</td>
                        <td>{user.itemPolicies.join(', ')}</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                        </tr>
                        ) 
                    })}
                    
                </tbody>
              </table>
            </div>
        </>
        }
        </>
    )
}

export default UserHome