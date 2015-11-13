// require("board.js")





// function findNextEmpty(begin){
// 	for(d){
// 		this.slice(begin)
// 	}
// }

String.prototype.findRow = function(n) {
	var r = Math.floor(n / 9);
	return this.slice(r*9, r*9+9)
}

String.prototype.findColumn = function(n) {
	var c = this.length % n 
	var values = ""
	for(var x=0; x<81; x +=9){
		 values += this[x+c]
	}
	return values
}
var box = function(board, i){
	console.log(Math.floor((board.length % i)/3) + Math.floor(i/(9*3)))

} 
String.prototype.findBox = function(n){
	var b = box(this, n)
	var values = ""
	for(var x=0; x<81; x++){
		if(box(this, x) == b){
			values += this[x]
		}
	}
	return values
}
