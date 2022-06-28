import React, { Component,useState,useEffect } from 'react'


  
      
      
//    componentDidMount(){
//       this.timerID = setInterval (
//          () => this.tick(), 1000
//       );
//    }
//    componentWillUnmount() {
//       clearInterval (this.timerID);
//    }

//    tick(){
//       this.setState((prevState) => {
//          let edad = prevState.edad +1;
//          return {
//             ...prevState,
//             fecha: new Date(),
//             edad
//          }
//       });
//    }






export const ClockFunction = (props) => {

    props={

    edad: 15,
    nombre: 'Martín',
    apellidos: 'San José'
  
    }
    


  useEffect(()=>{
  
   const timer=setInterval(()=>{
    
       let edadSec=props.edad++; 
      
    },1000)
    return () => {
        clearInterval(timer)
    };
  })
 
  
    return (
        <div>
              
            <h1>edad: {props.edad}</h1>
            <h1>{props.nombre}</h1>
            <h1>{props.apellidos}</h1>
           
           
   
        </div>
    );
 

    }




