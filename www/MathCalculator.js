var exec = require('cordova/exec');

module.exports.add = function(args0, success, error) {
        exec(success, error, 'MathCalculator', 'add', [args0]);
    },
    module.exports.subtract = function(args0, success, error) {
        exec(success, error, 'MathCalculator', 'subtract', [args0]);
    },
    module.exports.multiply = function(args0, success, error) {
        exec(success, error, 'MathCalculator', 'multiply', [args0]);
    }