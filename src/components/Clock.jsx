import React, {useState,useEffect } from 'react'


  



export const ClockFunction = (props) => {

    props={

    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  
    }

    const [edadSec, setEdadSec] = useState(0);
    
    const createTimer = () => {
    const timer=setInterval(()=>{
        
           setEdadSec(props.edad++); 
          
        },1000)
        return () => {
            clearInterval(timer)
        };
    }
    useEffect(()=>{
     
          createTimer();
    },[])
    return (
        <div>
              
        
            <h1>Hola,{props.nombre}</h1>
            <h1>{props.apellidos}</h1>
            <h1>edad: {edadSec}</h1>
           
           
   
        </div>
    );
 

    }




