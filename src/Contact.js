import React from 'react'
import {AutoGrid} from './Card'
import { CenteredGrid } from "./Grid";

import './App.css';


export const Contact = () => {
    return (
        <>
        
        <h1 style={{textAlign:'center',color:'blue', fontWeight:'bold'}}>Get In Touch With Us</h1>
        <CenteredGrid />
        <AutoGrid/>
        </>   
    
    )
}
