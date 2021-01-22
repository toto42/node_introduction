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