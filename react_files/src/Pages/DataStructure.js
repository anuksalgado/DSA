import React from 'react';
import arrayImage from "../../src/images/Array.png"
import stack1 from "../../src/images/Stack1.png"
import stack2 from "../../src/images/Stack2.png"
import stack3 from "../../src/images/Stack3.png"
import stack4 from "../../src/images/Stack4.png"
import algorithmDesign from "../../src/images/algorithmDesign.png"
import ButtonPopUp from "../buttonPopUp/buttonPopUp";
import jumbledNumbers from "../../src/images/JumbledNumbers.png"

function DataStructure() {
  return(
    <div class="py-10">
                <div id="DSDiv" class="px-4">
                  <h1 class="font-roboto text-2xl">Arrays </h1>
                  <p>Arrays can be thought of holding a set amount of values with a single data type. The length is usually determined during the initialisation of the array and this remains fixed. </p>

                  <img src={arrayImage} className="h-50 w-100" alt="Computer" />
                  <p>As we can see from above, arrays usually start with the index position of 0. This has to do with index being used as an offset against memory location. If that confuses you, just remember, the first element of an array starts at index position 0 for almost all programming languages!</p>
                </div>
    
                <br></br>
                <br></br>
    
                <div id="AlgoDiv" class="px-4">
                  <h1 class="font-roboto text-2xl">Stacks</h1>
                  <p>It's easy to use the Stack class from lets say, Java, to implement your stack. But you would ideally understand more of the stack algorithm when using arrays for it.</p>
      
                  <div class="py-5">
                    <p class="font-roboto text-1xl">First step</p>
                    <p>Initially, you push something onto your array.</p>
                      <img src={stack1} class="h-50 w-100 justify-left" alt="Algorithm"></img>
                    
                      <p>The next item you push in gets put into the first index and whatever was in that position gets shifted forward</p>
                      <img src={stack2} class="h-50 w-100 justify-left" alt="Algorithm"></img>


                      <p>If we were to pop an item from the stack, it would be the item at the very start of the stack</p>
                      <img src={stack3} class="h-50 w-100 justify-left" alt="Algorithm"></img>

                      <p>Final item being popped</p>
                      <img src={stack4} class="h-50 w-100 justify-left" alt="Algorithm"></img>

                      <p>This is a very simplified understanding of what happens with an array implemented Stack</p>
                  </div>

    
                </div>
                
                <br></br>
                <br></br>
                <div id="AlgoDiv" class="px-4">
                  <h1 class="font-roboto text-2xl">Some Sorting algorithms</h1>
                  <p>There are multiple sorting algorithms which are crucial for understanding how the usage of loops in these algorithms and their techniques affect Big O notation. </p>  

                  <br></br>
                  <img src={jumbledNumbers} className='h-16' alt='jumbled numbers'></img>
                  <br></br>
                <div>
                <p>Some basic sorting algorithms are:</p>
    
                
                <div className="flex justify-between items-center w-full px-10">
                    <ol className="list-decimal">
                        < li>Selection Sort</li>
                        <li>Bubble Sort</li>
                        <li>Insertion Sort</li>
                    </ol>
                    <ButtonPopUp className="ml-auto" text="There are plenty of algorithms which you can learn about which would be more advanced. But these give a good understanding of the basics." /> 
                </div>
                </div>       
                <br></br>
    
                </div>
            </div>
        )
}

export default DataStructure;