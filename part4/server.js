// creating a new class that supports events with EventEmitter

const EventEmitter = require('events');
var utils = require('utils')
    EventEmitter = require('events').EventEmitter;

var Server = function() {
    console.log('init');
};

utils.inherits(Server, EventEmitter);

var s = new Server();

s.on('abc', function() {
    console.log('abc');
});

s.emit('abc');
s.emit('abc', a, b, c);

if (arguments.length <= 3) {
    handler.call(this, arguments[1], arguments[2]);
} else {
    var args = Array.prototype.slice.call(arguments, 1);
    handler.apply(this, args);
}