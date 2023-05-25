import React from 'react';

const Square=(props)=> {
    return (
        <div onClick={props.onClick} className="square" >
            <h5 className='text'>{props.value}</h5>
            
        </div>
    );
}

export default Square;