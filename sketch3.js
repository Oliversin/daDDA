
let p1 //= {x: 0, y:0};
let p2 //= {x: windowWidth, y:400}
let p3,p4
let p5,p6
let p7,p8


function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	//line(p1.x, p1.y, p2.x, p2.y)
	p1 = {x: 0, y:0};
	p2 = {x: windowWidth, y:windowHeight}
	ecuapp(p1,p2)

	p3 = {x: 0, y: windowHeight}
	p4 = {x:windowWidth, y: 0}
	ecuapp(p4,p3)

	p5 = {x:0, y: windowHeight/2}
	p6 = {x:windowWidth, y:windowHeight/2}
	ecuapp(p6,p5)

	p7 = {x:windowWidth/2, y:0}
	p8 = {x:windowWidth/2, y:windowHeight}
	ecuapp(p7,p8)



}

function ecuapp(p1, p2){
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;

	point(p1.x, p1.y)

	var m,b;
	let y,x;
	console.log(dx+"&"+dy)

	if (dx >dy || dy ==0) {
		m = dy / dx;
		b = p1.y - m * p1.x
		console.log(m+"&"+b)
		if (dx < 0) {
			dx = -1;
		}else{
			dx = 1
		}
		console.log(dx)
		while(p1.x !=  p2.x){
			
			p1.x += dx;
			y = m * p1.x + b;
			point(p1.x, y)
			/*x++;*/
		}
	}else if (dy !=0 ) {
		//console.log(m+"&"+b)
		m= dx / dy;
		b = p1.x - m*p1.y;
		if (p1.y < 0) {
			dy = -1;
		}else{
			dy = 1;
		}
		while(p1.y !=  p2.y){
		p1.y += dy;
		x = m * p1.y + b;
		point(x, p1.y)
		/*x++;*/
		}
	}

	
	
	
}
