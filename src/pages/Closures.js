import React, { useState } from "react";
import { Center, Rows } from "../layouts/Line";
import { Box } from "../layouts/Box";
import "./style.css";

const code = `function outerFunction(outerVariable) {
    const outer2 = "outer2";
    return function innerFunction(innerVariable) {
      console.log("Outer Variable: " + outerVariable);
      console.log("Inner Variable: " + innerVariable);
    };
  }
  
  const newFunction = outerFunction("I'm an outer value");
  newFunction("I'm an inner value");`;

function Closures() {
  const textAreaView = (
    <div>
      <textarea
        id="w3review"
        name="w3review"
        rows="25"
        cols="56"
        defaultValue={code}
      />
    </div>
  );
  function outerFunction(outerVariable) {
    const outer2 = "outer2";
    return function innerFunction(innerVariable) {
      console.log("Outer Variable: " + outerVariable);
      console.log("Inner Variable: " + innerVariable);
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newFunction = outerFunction(event.target.outer.value);
    newFunction(event.target.inner.value);
  }

  return (
    <div>
      <Center>
        <Box>
          <h1>Closures</h1>
          <p>
            Closures mean that when you have a function inside another function,
            the inner function can still use the variables and rules from the
            outer function even after it's done running. In simpler terms, the
            inner function "captures" the information from the outer function
            when it's created. This lets the inner function use and change those
            variables, even if the outer function is finished. This helps make
            programming more flexible and powerful by allowing functions to keep
            track of information or perform specific actions, like creating
            private variables or reusing code.
          </p>
        </Box>
      </Center>
      <Center>
        <Rows>
          <Box>
            <form onSubmit={handleSubmit}>
              <label>
                Outer Variable:
                <input
                  type="text"
                  name="outer"
                  defaultValue={"I'm an outer value"}
                />
              </label>
              <br />
              <label>
                Inner Variable:
                <input
                  type="text"
                  name="inner"
                  defaultValue={"I'm an outer value"}
                />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </Box>
        </Rows>
      </Center>
      <Center>
        <Box>{textAreaView}</Box>
      </Center>
    </div>
  );
}

export default Closures;
