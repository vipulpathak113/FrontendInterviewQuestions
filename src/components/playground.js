import React from 'react';

function playground(props) {

    const style1 = {
        width: "550px",
        height: "150px",
        background: "#eaeaea",
        position:"relative"
    }

    const style2 = {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform :"translate(-50%,-50%)"
    }

    return (
        // <div style={style1}>
            <div style={style2}>Center DIV</div>
        // </div>
    );
}

export default playground;