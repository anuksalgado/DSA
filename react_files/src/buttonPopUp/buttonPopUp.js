import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Question from "../images/Question.png";

export default function ButtonPopUp({ text }) {
    return (
        <div>
            <Popup trigger={
                <button> 
                    <img src={Question} className="w-12 h-12" alt="Question" />
                </button>
            } position="left center">  {/* opens to the left */}
                <div className="p-2 bg-white border border-gray-300 rounded shadow-md animate-pulse">
                    <p className="text-sm">{text}</p> 
                </div>
            </Popup>
        </div>
    );
};
