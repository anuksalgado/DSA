import React, { useState } from "react";
import computerImage from "../../src/images/computer.jpg"

const Introduction = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    
      const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
      };

      const [isDropdownVisible1, setDropdownVisible1] = useState(false);
    
      const toggleDropdown1 = () => {
        setDropdownVisible1(!isDropdownVisible1);
      };
    

    return (
        <div>
          <div class="py-5 flex items-center justify-center">
            <img src={computerImage} class="h-auto max-w-xl" alt="Computer"></img>
          </div>

          <div class="px-10 py-8 font-roboto text-lg">
            <div  class="bg-slate-300 rounded-2xl ">
              <h1 class="px-5 py-5">
                    Welcome to DSA4Beginners! This would be your one-stop destination in order to start mastering Data structures and algorithms. This page helps not only beginners, but also experienced programmers who would like to brush up on their knowledge. <br/>
                    The main aim of this website is to teach the core concepts of DSA and is a fun personal project for me to brush up on my own DSA skills whilst making a website for it!
                </h1>
              </div>
              
              
              <br></br>
              <div class="bg-slate-300 rounded-2xl">
                <h1 class="px-5 py-5">
                  <div class="text-xl underline">
                  The purpose
                  </div>
                    Data Structures and Algorithms form the very foundations of Computing in any form be it Software Engineering, Computer Science, IT or any other fields which require computing to an extent. 

                    They help to write efficient code, solve complex problems and are often quizzed in technical interviews. My goal is to simplify these concepts with clear explanations, examples and materials whcih i used personally. 
                </h1>
              </div>
              

              <br></br>

              <div  class="bg-slate-300 rounded-2xl ">
                <div class="px-5 py-5">
                  <div class="text-xl underline">
                  What you will learn <br></br>
                  </div>
                  <div class="px-5">
                    <ol class="list-decimal">
                      <li onClick={toggleDropdown} class="cursor-pointer w-fit">Data Structures ...
                        {isDropdownVisible && (
                                    <ul id="dropDown1" class="list-disc px-8">
                                    <li>Arrays</li>
                                    <li>Linked Lists</li>
                                    <li>Stacks</li>
                                    <li>Queues</li>
                                    <li>Trees</li>
                                    <li>Graphs</li>
                                    <li>Hash Tables</li>
                                  </ul>
                                  )}
                      </li>
                      <li onClick={toggleDropdown1} class="cursor-pointer w-fit">Algorithms ...
                      {isDropdownVisible1 && (
                        <ul class="list-disc px-8">
                          <li>Sorting</li>
                          <li>Searching</li>
                          <li>Recursion</li>
                        </ul>)}
                        </li>

                      <li>Real World Applications</li>
                    </ol>
                  </div>
                </div>
              </div>
              

          </div>
        </div>
    );
};

export default Introduction;