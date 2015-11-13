var expect = require("chai").expect
var Sudoku = require("../app/board.js")


describe("Board Constructor", function(){
	xit("Constructs X nested arrays of X size", function() {
		var board = Constructor.construct(5)

		expect(board.length).to.equal(5)
		expect(board[0].length).to.equal(5)
	})
	xit("Cells have legitimate values", function(){
	})
})