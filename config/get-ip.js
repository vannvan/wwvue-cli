const os = require('os');
const getlocalIp = function (){
	var interfaces = os.networkInterfaces();
	var ipArr = []
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family == 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                // return alias.address;
                ipArr.push(alias.address)
            }
        }
    }
    return ipArr
}

module.exports.getlocalIp = getlocalIp
