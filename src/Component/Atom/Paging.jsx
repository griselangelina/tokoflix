import React from 'react';
import './Atom.css';

export const Paging = (props) => {

    return (
        <div className="paging">
            <p className="title">Paging :</p>
            {
                props.pushPage.map((x)=>x)
            }
        </div>
    );
}


