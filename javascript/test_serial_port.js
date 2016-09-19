var SerialPort = require('serialport');
var path = require('path');
var dispatch = require(path.resolve(__dirname, './sbp/')).dispatch;

// Message construction
var constructMsg = require(path.resolve(__dirname, './sbp/construct'));
var sbpPiksi = require(path.resolve(__dirname, './sbp/piksi'));
var MsgReset = sbpPiksi.MsgReset;

// Change this to a valid piksi serial port path.
var serial = '/dev/cu.usbserial-00001014';

var piksi = new SerialPort(serial, {
  //baudrate: 115200 // serial or uart
  baudrate: 1000000 // USB
});

piksi.on('open', function () {
  console.log('Opened piksi.');

  dispatch(piksi, function (err, framedMsg) {
    console.log('Message from piksi:', err, framedMsg.messageType);
  });
});
