import React, { act, useEffect, useRef, useState } from 'react'

const useCountdown = (intialTime) => {
    const [time,setTime]=useState(intialTime);
    const [active,setActive]=useState(false);
    const intervalRef=useRef(null);
    useEffect(()=>{

       if(active && time >0){
        intervalRef.current=setInterval(() => {
            setTime((prevTime)=> prevTime-1);
            
        }, 1000);

       }


       else if(time==0){
        clearInterval(intervalRef.current)
        
        
       }
       else if(time<0){
        setTime(intialTime)
       }

       return ()=>clearInterval(intervalRef.current)


    },[active,time])

    const start=()=>{
        setActive(true);
    }
    const stop=()=>{
        setActive(false);
    }
    const reset=()=>{
        setActive(false)
        setTime(intialTime)
    }

  return {time,active,start,stop,reset};
}

export default useCountdown;