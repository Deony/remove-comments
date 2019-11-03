function removeComments(str) {
	function removeSingleLineComments(str) {
		let reg = /\/\/.*\n/g;
		let result = str.replace(reg, '\n');
		return removeMultiLineComments(result);
	}
	
	function removeMultiLineComments(str) {
		let reg = /\/\*[^*]*\*\//g,
			result = str.replace(reg, '');
		return result;
	}
	
	return removeSingleLineComments(str);
}

export default removeComments;
// module.exports = { removeComments };