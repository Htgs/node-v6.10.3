const count = {
	a: 1,
	add: function () {
		return this.a + 'add'
	}
}

// exports.cv = count.add
module.exports = {
	cv: count
}