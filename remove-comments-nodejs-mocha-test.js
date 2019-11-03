const assert = require('assert');
const commentsModule = require('./remove-comments');


it('should remove single-line comments', () => {
	const initialJsFileContent = 'function test1() {\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\t// some trash\n' +
		'\t\n' +
		'\tconsole.log("Hello 2"); // some other trash\n' +
		'\tconsole.log("Hello 3");\n' +
		'\t\n' +
		'}';
	
	const actualJsFileContent = commentsModule.removeComments(initialJsFileContent);

	const expectedJsFileContent = 'function test1() {\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("Hello 2"); \n' +
		'\tconsole.log("Hello 3");\n' +
		'\t\n' +
		'}';
	
	assert.equal(actualJsFileContent, expectedJsFileContent);
});

it('should remove multiline-line comments', () => {
	const initialJsFileContent = 'function test2() {\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\t/* some trash\n' +
		'\t\n' +
		'\tconsole.log("Hello 2");*/\n' +
		'\tconsole.log("hello 3");\n' +
		'\t\n' +
		'\t\n' +
		'\t/* some trash 2\n' +
		'\t\n' +
		'\tconsole.log("Hello 4");*/\n' +
		'\t\n' +
		'\tconsole./*some text*/log("hello 5");\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("hello 6");\n' +
		'\tconsole.log("hello 7");\n' +
		'\tconsole.log("hello 8");\n' +
		'\t\n' +
		'\t\n' +
		'}';
	
	const actualJsFileContent = commentsModule.removeComments(initialJsFileContent);

	const expectedJsFileContent = 'function test2() {\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("hello 3");\n' +
		'\t\n' +
		'\t\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("hello 5");\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("hello 6");\n' +
		'\tconsole.log("hello 7");\n' +
		'\tconsole.log("hello 8");\n' +
		'\t\n' +
		'\t\n' +
		'}';
	
	assert.equal(actualJsFileContent, expectedJsFileContent);
});

it('should remove single-line and multiline-line comments', () => {
	const initialJsFileContent = 'function test3() {\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\t/* some trash\n' +
		'\t\n' +
		'\tconsole.log("Hello 2");*/\n' +
		'\tconsole.log("hello 3");\n' +
		'\t\n' +
		'\t\n' +
		'\t/* some trash 2\n' +
		'\t\n' +
		'\tconsole.log("Hello 4");*/\n' +
		'\t\n' +
		'\tconsole/*some comment*/.log("hello 5")\n' +
		'\t\n' +
		'\t// trash 3\n' +
		'\tconsole.log("hello 6");\n' +
		'\t// trash 4\n' +
		'\tconsole.log("hello 7");\n' +
		'\t\n' +
		'\t\n' +
		'}';
	
	const actualJsFileContent = commentsModule.removeComments(initialJsFileContent);

	const expectedJsFileContent = 'function test3() {\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("hello 3");\n' +
		'\t\n' +
		'\t\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("hello 5")\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("hello 6");\n' +
		'\t\n' +
		'\tconsole.log("hello 7");\n' +
		'\t\n' +
		'\t\n' +
		'}';
	
	assert.equal(actualJsFileContent, expectedJsFileContent);
});

it('should not change file without comments', () => {
	const initialJsFileContent = 'function test4() {\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\n' +
		'\tconsole.log("hello 2");\n' +
		'}';
	
	const actualJsFileContent = commentsModule.removeComments(initialJsFileContent);

	const expectedJsFileContent = 'function test4() {\n' +
		'\t\n' +
		'\t\n' +
		'\tconsole.log("Hello world");\n' +
		'\t\n' +
		'\n' +
		'\tconsole.log("hello 2");\n' +
		'}';
	
	assert.equal(actualJsFileContent, expectedJsFileContent);
});