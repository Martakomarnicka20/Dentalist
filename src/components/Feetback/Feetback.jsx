import React from 'react'
import axios from 'axios'
import  './Feetback.css'
export default function Feetback() {
    const [feetback,setFeetback]= React.useState({status:false})

    return (
        <div className='feetback'>
            
            <h2 className='title' style={{color:'red'}}>feetback</h2>
            <input type="text" placeholder='name' value={feetback.name} onChange={(e)=>setFeetback({...feetback,name:e.target.value})}/>
            <textarea name="feetback" id="feetback" value={feetback.feetback} onChange={(e)=>setFeetback({...feetback,feetback:e.target.value})}></textarea>
            <select id="rating" value={feetback.rating} onChange={(e)=>setFeetback({...feetback,rating:parseInt(e.target.value)})}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={()=>axios.post('http://localhost:3001/feetback', feetback)}>send</button>
        </div>
    )
}
