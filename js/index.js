import Moon from './moon.js';

const CANVAS_HEIGHT = 700;
const CANVAS_WIDTH  = 1500;

let canvas      = document.getElementById("canvas-welcome");
canvas.height   = CANVAS_HEIGHT;
canvas.width    = CANVAS_WIDTH;

let moon = new Moon(CANVAS_HEIGHT, CANVAS_WIDTH);

let ctx = canvas.getContext("2d");

moon.draw(ctx);