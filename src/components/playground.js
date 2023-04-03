import React from 'react';

function playground(props) {

 

    const style2 = {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform :"translate(-50%,-50%)"
    }

    return (
        <div>
            <div className="tooltip" data-tooltip="This is tooltipcontent" style={style2}>Center DIV</div>
            <ol id="o-list">
                <li>Hi</li>
                <li>Hello</li>
                <li>Bye</li>
            </ol>
            </div>
       
    );
}

export default playground;