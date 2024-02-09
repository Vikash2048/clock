import { useState, useEffect } from "react";
import Timer from "./Timer"

const Clock = () => {
    const [hr, setHr] = useState("00");
    const [min, setMin] = useState("00");
    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const currentHour = date.getHours().toString().padStart(2, '0');
            const currentMin = date.getMinutes();
            console.log(currentHour)
            setHr(currentHour);
            setMin(currentMin);
            
        };


        updateTime();
        const intervalId = setInterval(updateTime, 30000); 


        return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="clock">
    <span>pm</span>
    <Timer hour={hr}/> 
    <Timer hour={min}/> 
    </div>
  )
}

export default Clock