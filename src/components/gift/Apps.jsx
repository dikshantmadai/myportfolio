import React from "react";
import logo from "../../logo.svg"; // Update the path to logo.svg
import './Apps.css';
import chogift from "../../assets/chogift.png"

function Apps() {
    return (
        <main>
            <div className='container'>
                <div className="container1">
                    <div className="box1"><img src={chogift} alt="" /></div>
                </div>
            </div>
        </main>
    )
}

export default Apps;
