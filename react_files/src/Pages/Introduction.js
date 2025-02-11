import React from 'react';
import dataHuman from "../../src/images/DataHuman.png"
import algorithmDesign from "../../src/images/algorithmDesign.png"
import ButtonPopUp from "../buttonPopUp/buttonPopUp";

const Introduction = () => {
    return(
        <div class="py-10">
            <div id="DSDiv" class="px-4">
            <h1 class="font-roboto text-2xl">What are Data structures </h1>
            <p>A Data structure is a way of effectively storing data and organising it. There are multiple structures which can be used for these very purposes!</p>

            <div class="py-5 flex items-center justify-between">
                <img src={dataHuman} className="h-50 w-100" alt="Computer" />
                <ButtonPopUp text="It is quite important to start off with data structures before going into algorithms" /> 
            </div>

            <p>Some common and important Data structures include</p>
            <ol class="list-decimal px-10">
                <li>Arrays</li>
                <li>Stacks and Queues</li>
                <li>Linked lists</li>
            </ol>
            <br></br>
            <p>It is important that this list is followed as is,atleast by the learning of arrays first before anything, as arrays form the basis of everything in Data structures and even algorithms!</p>

            </div>

            <br></br>

            <div id="AlgoDiv" class="px-4">
            <h1 class="font-roboto text-2xl">What are Algorithms?</h1>
            <p>An algorithm is a step-by-step approach in solving a problem. Algorithms are used for any and all forms of problems but in our case, we use algorithms to manipulate data structures to perform specific operations as efficiently as possible [Link to the Big O slide]</p>

            <div class="py-5">
                <img src={algorithmDesign} class="h-50 w-100 justify-left" alt="Algorithm"></img>
            </div>

            <p>Some common and important Algorithms include</p>
            <ol class="list-decimal px-10">
                <li>Trees</li>
                <li>Graphs</li>
                <li>Hash Tables</li>
            </ol>
            <br></br>
            <p>There are more algorithms such as Advanced trees but the above cover the most important ones.</p>

            </div>  
        </div>
      )
};

export default Introduction;