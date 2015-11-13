var expect = require("chai").expect
require("../app/solver.js")

describe("Game Solver", function(){
	describe("Cells' Neighbourly Relationships", function(){
		
		var board = "609238745274561398853947621486352179792614583531879264945723816328196457167485932"

		609238745
		274561398
		853947621
		486352179
		792614583
		531879264
		945723816
		328196457
		167485932
		
		it("Finds first '0'", function(){
			expect(1).to.equal(1)
		})


		it("Tests horizontally", function(){
			var row = board.findRow(1)
			expect(row).to.eq("609238745")
		})

		it("Finds Column", function(){
			var column = board.findColumn(2)
			expect(column).to.equal("075893426")

		})

		it("Finds Box", function(){
			var box = board.findBox(2)
			expect(box).to.eq("609274853")
		})
	})
})