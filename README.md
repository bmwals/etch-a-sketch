# Etch-A-Sketch

## Description
This is a classic simple code that let you draw over the grid cells. In this
case I am making the etch-a-sketch with javascript only.
I implemented DOM manipulation to make `div`, which inside the `div` I put
`event.listener`, in which when I hover my mouse/pointer towards the cells, it
will change the color to black. To make the grid, I am using `for` loop so that
it will flex the size accordingly to the container.

Okay, here what I utilized to create this:
 - DOM manipulation, `appendChild` to create a new `div`
 - Using `for` loop to create custom number of grid cells
 - Creating a `function` to limit the number of grid cells that can be generated
 - `addEventListener` `mouseover` to change the color of the grid cells
 - `querySelectorAll` with `forEach` is tricky, I used this method to apply
    rules to each grid cells
 - for CSS, I make all the grids and cells to `display = flex` and to make the
   cells to fit the container, I use `flex = 1`. With for loops, This method is the best practice to fit cells to its container 

## What's next?
These will come next:
 - Applying different color, not only black
 - Styling better looks-and-feels
 - Adding color-picker button
 - Fix the reset grid button
 - Add eraser button