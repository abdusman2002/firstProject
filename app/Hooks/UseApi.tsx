import { useState } from "react"



//this is a custom hook
//just provide the api function call to this hook and it will return data,error,loading flag and the request function
//this hook is used in itemsScreen
export default  useApi = (apiFun)=>{
    const [items,setItems] = useState([])
    const [error,setError] = useState(false)
    const [isloading,setIsLoading] = useState(false)

    const getData = async() => {
        setIsLoading(true)
        const result = await apiFun
        if( !result.ok ){
            return setError(true)
        }
       // console.log(result)
        setItems(result.data)
        setIsLoading(false)
      
    }

    return {items,error,isloading, getData}
}