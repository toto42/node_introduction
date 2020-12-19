
var Human = function() {
    this.Prop = 'stronk!(this.prop)'
    this.Func = function(text) {
        console.log(text + ' is super duper strunk!(this.func)')
    }
}

var toto42 = new Human()

function middleware(func) {
    oldFunc = func.Func
    func.Func = function(text) {
        text = text + ' really(middleware1)'
        oldFunc(text)
    }
}

function anotherMiddleware(func) {
    func.anotherProp = 'super duper(middlewar2)'
}

function caller(input) {
    input.Func(input.anotherProp)
}

middleware(toto42)
anotherMiddleware(toto42)
caller(toto42)