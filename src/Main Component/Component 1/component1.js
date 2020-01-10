
import React from 'react';
import './component1.css';

const avis = require('./images/avis.png');
const voda = require('./images/voda.png');
const biogen =require('./images/biogen.png');
const placeholder =require('./images/container.png');





const person = () => {
    return <div className="sponsors">
        
        <img src={avis} alt="none" height="200px" width="250px"/>
        <img src={voda} alt="none" height="200px" width="250px"/>
        <img src={biogen} alt="none" height="200px" width="250px"/>
        <img src={avis} alt="none" height="200px" width="250px"/>
        <img src={placeholder} alt="none" height="200px" width="250px"/>
    
    
    
    
    
    </div>
};



export default person;
