import React, { useEffect, useState } from 'react';

const useDebouncevalue = (value,delay) => {
    const [input,setInput]=useState("");
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setInput(value);
        },delay)

        return ()=>{
            clearTimeout(timeout)
        }
    },[value,delay])

  return input;
}

export default useDebouncevalue;