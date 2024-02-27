const { SerialPort } = require('serialport')

const serialPort = new SerialPort({ port: '/dev/ttyUSB0', baudRate: 460800 })

port.on('data', function (data) {
  console.log('Data:', data)
})

serialPort.write(`AT\r\n`)


// stty -F /dev/ttyUSB0 460800 && echo -e "AT+CMGF=1\r\nAT+CMGS=\"+4367761943548\"\r\nhello world\x1A" > /dev/ttyUSB0