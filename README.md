This application removes from the file 2 types of JavaScript comments: single-line and multi-line comments. If the file doesn't contain any type of comments, the file won't be changed.

There is also implemented Node.js test environment - Mocha for the testing the application.

To run the Mocha test it's necessary to comment out the line "export default removeComments;" and uncomment the line "module.exports = { removeComments };" in the remove-comments.js file.