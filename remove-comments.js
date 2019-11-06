function removeComments(str) {
	function removeSingleLineComments(str) {
		let reg = /\/\/.*(?=\r\n|\n)/g,
			result = str.replace(reg, '');

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