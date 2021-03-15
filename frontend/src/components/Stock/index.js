import React from 'react';

export default function Stock(props){
    return(
        <div className="dataStock">
            <div className="divName"> <h2>{props.nome}</h2></div>
            <div className="divPrice"><h3>Price:<br/>${props.price}</h3></div>
            <div className="divDate"><h3>Date:<br/>{props.date}</h3></div>
        </div>
    );
}