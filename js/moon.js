export default class Moon{
    constructor(canvasHeight, canvasWidth){
        this.radius = 500;

        this.position = {
            x: canvasWidth/2,
            y: this.radius
        };
    }

    draw(ctx){
        //adding shadow
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 15;

        //drawing semi-circle
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, Math.PI, 2 * Math.PI);
        ctx.closePath();
        
        //filling with color
        ctx.fillStyle = "#fff";
        ctx.fill();
        
    }
}