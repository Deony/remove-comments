const assert = require('assert');
const commentsModule = require('../remove-comments');
const fs = require('fs');


it('should remove single-line comments', () => {
	compareFiles('./test/initial/fileWithSingleLineComments.js', './test/expected/fileWithSingleLineComments.js');
});

it('should remove multiline-line comments', () => {
	compareFiles('./test/initial/fileWithMultiLineComments.js', './test/expected/fileWithMultiLineComments.js');
});

it('should remove single-line and multiline-line comments', () => {
	compareFiles('./test/initial/fileWithSingleAndMultiComments.js', './test/expected/fileWithSingleAndMultiComments.js');
});

it('should not change file without comments', () => {
	compareFiles('./test/initial/fileWithoutComments.js', './test/expected/fileWithoutComments.js');
});


function compareFiles(filePathInitial, filePathExpected) {
	const initialJsFileContent = getFileContent(filePathInitial);
	const actualJsFileContent = commentsModule.removeComments(initialJsFileContent);
	
	const expectedJsFileContent = getFileContent(filePathExpected);
	assert.equal(actualJsFileContent, expectedJsFileContent);
}

function getFileContent(filePath) {
	return fs.readFileSync(filePath, {encoding: 'utf8'})
}