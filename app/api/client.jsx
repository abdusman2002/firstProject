import {create} from 'apisauce'

const apiClient = create({
    baseURL: 'http://hp-api.herokuapp.com/api'
})

export default apiClient