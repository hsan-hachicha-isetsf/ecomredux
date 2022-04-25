import axios from 'axios'
const url=process.env.REACT_APP_ADRESSE+"api";
export default axios.create({
    baseURL:url
})
