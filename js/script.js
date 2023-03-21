// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {

  // input
  let base = parseFloat(document.getElementById("base-of-triangle").value);
  let height = parseFloat(document.getElementById("height-of-triangle").value);

  // process
  let area = (base * height) / 2;

  // output
  document.getElementById("area").innerHTML = "Area is: " + area +  "cm²";
}
