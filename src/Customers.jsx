import React from "react";

function Customer(props) {
    return (
        <div className="Customer">
            <h2><span>{props.title}</span></h2>
            <p className="text">{props.text}</p>
            <p className="author">{props.author}</p>
        </div>
    )
}

function Customers() {
    return (
        <div className="Customers">
            <Customer title="Amazing" text="Best company i've ever worked with" author="Jezz Bezos"/>
            <Customer title="Wonderful" text="These guys are great" author="Sundar Pichai"/>
        </div>
    )
}

export default Customers;