
let p1 //= {x: 0, y:0};
let p2 //= {x: windowWidth, y:400}
let p3,p4
let p5,p6
let p7,p8



function setup() {
	createCanvas(windowWidth, windowHeight);
	p1 = {x: 0, y:0};
	p2 = {x: windowWidth, y:windowHeight}
	p3 = {x: 0, y: windowHeight}
	p4 = {x:windowWidth, y: 0}
	p5 = {x:0, y: windowHeight/2}
	p6 = {x:windowWidth, y:windowHeight/2}
	p7 = {x:windowWidth/2, y:0}
	p8 = {x:windowWidth/2, y:windowHeight}

}

function draw() {
	//line(p1.x, p1.y, p2.x, p2.y)
	
	ecuapp(p1,p2)

	
	ecuapp(p3,p4)

	
	ecuapp(p5,p6)

	
	ecuapp(p7,p8)



}

function ecuapp(p1, p2){
	var p,xi,yi,k;
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;

	point(p1.x, p1.y)

	let y=p1.y,x=p1.x;
	

	if (dx >dy || dy ==0) {
		p = dx;
		/*console.log(dx+"&"+dy)*/
		//console.log(p);

	}else {
		p=dy;
		
	}
		xi=dx/p;
        yi=dy/p;

	/*if (p1.x> p2.x) {
		xi*=(-1);
	}

	if (p1.y> p2.y) {
		yi*=(-1);
		x=p1.x;
		y=p1.y;
	}*/

	for(k=0;k<p;k++){
		x+=xi;
		y+=yi
		console.log(x+"&"+y)
		point(x, y);
	}

	
	
	
}
