import React, { useEffect, useState } from 'react';

const useFetch = () => {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [product,setProducts]=useState([]);
    const fetchProduct=async()=>{
        setLoading(true);
        setError(null);
        try{
            const response=await fetch("https://fakestoreapi.com/products");
            if(!response.ok){
                alert("Data is not fetched ")
            }
            const data=await response.json();
            setProducts(data)

        }
        catch(error){
        setError(error.message)
        }
        finally{
            setLoading(false);
        }

    }
     
    useEffect(()=>{
        fetchProduct();
    },[])
  return {loading,error,product}
}

export default useFetch;