import axios from 'axios'
let url = 'http://localhost:8000'

export function fetchUser() {
    return (dispatch) => {
        dispatch({type: 'START_FETCH'})
        axios({
            url: `${url}/users`,
            method: 'get'
        })
        .then(({data}) => {
            dispatch({type: 'FETCH_USER', payload: data})
        })
        .catch(err => console.log((err)))
        .finally(_ => dispatch({type:'FINISH_FETCH'}))
    }
}