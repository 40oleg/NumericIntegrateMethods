let f = (x) => {
	return 1 + x + Math.sin(2*x);
}

class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
}

class Solver {
	MonteCarlo(f, borders, iters) {
		let isCollision = 0;
		for(let i = 0; i < iters; i++) {
			let point = new Point(Math.random()*borders.right, Math.random()*borders.top);
			if(f(point.x) > point.y) isCollision++;
		}
		return borders.right*borders.top*(isCollision/iters);
	}
	Rectangle(f, borders, iters) {
		let square = 0;
		const step = borders.right/iters;
		for(let i = 0; i < borders.right; i+=step) {
			square += f(i)*step;
		}
		return square;
	}
}

const solver = new Solver();

console.log(`Метод Монте-Карло: ${solver.MonteCarlo(f, {right: 5, top:  20}, 1e7)}`);
console.log(`Метод прямоугольников: ${solver.Rectangle(f, {right: 5}, 1e7)}`);