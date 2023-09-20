import React from "react";


const PhoneFrame = ({ key, name, title, iframe }) => {

    return (
        <div className="mockup-phone border-primary">
            <div className="camera"></div>
            <div className="display">
                <div className="artboard artboard-demo phone-1">{iframe}</div>
            </div>
        </div>
    );
};

export default PhoneFrame;
    