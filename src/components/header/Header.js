import React from 'react';

function Header(props){
    return(
        <div className='header bg-blue'>
            <h3 className='pointer' onClick={props.resetCards}>Home</h3>
        </div>
    );
}

export default Header;