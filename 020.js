
var machine = {
	motors: 4
};

var robot = {
	friendly: true
};

var robby = {};

robot.__proto__ = machine;

robby.__proto__ = robot;

claim(robby.motors, 4);

claim(robby.friendly, true);

module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}