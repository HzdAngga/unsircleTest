import { useHistory } from "react-router"


function Landing() {
    const history = useHistory()


    return (
        <>
        <button 
        onClick={() => history.push('/users')}>
        User List</button>
        <button 
        onClick={() => history.push('/items')}>
        Item List</button>
        </>
    )
}

export default Landing