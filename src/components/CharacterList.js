import React from 'react';

const CharacterList = ({characters})=>{
    return(
        <div className="row">
            {
             characters.map((item, index)=>(
             <div key={index} className="col mb-4">
                <div className="card bg-secondary" style={{minWidth: "200px"}}> 
                   <img src={item.image} />
                   <div className='card-body' >
                        <h5 className='card-title'>{item.name}</h5>
                        <hr/>
                        <p>Espacie: {item.species}</p>                        
                      <p>Lugar: {item.location.name}</p>

                   </div>
                </div>
             </div>        
             ))
            }
             
        </div>
    )
}

export default CharacterList;