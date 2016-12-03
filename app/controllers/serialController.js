var SerialPort = require('serialport');
var port;
module.exports = function()
{
	port = new SerialPort('COM3',{
		baudRate: 9600
	});
}