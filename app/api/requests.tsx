import apiClient from "./client"



const getData = () => apiClient.get('/characters')

export default {
    getData
}