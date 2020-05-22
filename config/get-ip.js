const os = require('os');
const getWlanIp = () => {
  var interfaces = os.networkInterfaces().WLAN
  if (interfaces) {
    return interfaces.find(el => el.family == 'IPv4').address
  } else {
    return '127.0.0.1'
  }
}

module.exports.getWlanIp = getWlanIp
