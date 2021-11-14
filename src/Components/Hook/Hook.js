import { useEffect, useState } from "react"

const FetchData=()=>{
    const [service,setService]=useState([])
    useEffect(()=>{
        fetch("./courses.json")
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    
    return [service,setService];
}
export default FetchData