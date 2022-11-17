import { useEffect } from "react";
import { useState } from "react"

const useChef = (user)=>{
    const [chef, setChef] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:4000/chef/${email}`,{
                method: 'GET',
                headers:{
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {setChef(data.chef);
            setIsLoading(false)})
        }
    },[user])

    return [chef , isLoading]
}

export default useChef;