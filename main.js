import removeComments from "./remove-comments.js";


const fileWithSingleLineComments = 'function fileWithSingleLineComments() {\n' +
	'\t\n' +
	'\tconsole.log("Hello world");\n' +
	'\t\n' +
	'\t// some trash\n' +
	'\t\n' +
	'\tconsole.log("Hello 2"); // some other trash\n' +
	'\tconsole.log("Hello 3");\n' +
	'\t\n' +
	'}';

const fileWithMultiLineComments = 'function fileWithMultiLineComments() {\n' +
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

const fileWithSingleAndMultiLineComments = 'function fileWithSingleAndMultiComments() {\n' +
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

const fileWithoutComments = 'function fileWithoutComments() {\n' +
	'\t\n' +
	'\t\n' +
	'\tconsole.log("Hello world");\n' +
	'\t\n' +
	'\n' +
	'\tconsole.log("hello 2");\n' +
	'}';


//Test case 1
console.group();
console.warn('Test case 1: single-line comments');
console.log('-----------------------------------------------------------')
console.warn("Before removing comments in the file:");
console.log(fileWithSingleLineComments);

let result1 = removeComments(fileWithSingleLineComments);

console.warn("After removing comments in the file:");
console.log(result1);
console.groupEnd();


//Test case 2
console.group();
console.warn('Test case 2: multi-line comments');
console.log('-----------------------------------------------------------')
console.warn("Before removing comments in the file:");
console.log(fileWithMultiLineComments);

let result2 = removeComments(fileWithMultiLineComments);

console.warn("After removing comments in the file:");
console.log(result2);
console.groupEnd();


//Test case 3
console.group();
console.warn('Test case 3: single-line with multi-line comments');
console.log('-----------------------------------------------------------')
console.warn("Before removing comments in the file:");
console.log(fileWithSingleAndMultiLineComments);

let result3 = removeComments(fileWithSingleAndMultiLineComments);

console.warn("After removing comments in the file:");
console.log(result3);
console.groupEnd();


//Test case 4
console.group();
console.warn('Test case 4: without comments');
console.log('-----------------------------------------------------------')
console.warn("Before removing comments in the file:");
console.log(fileWithoutComments);

let result4 = removeComments(fileWithoutComments);

console.warn("After removing comments in the file:");
console.log(result4);
console.groupEnd();