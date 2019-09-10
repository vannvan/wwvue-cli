const os = require('os');
const getlocalIp = () => {
    var ipArr = []
    try{
        var interfaces = os.networkInterfaces();
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family == 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    ipArr.push(alias.address)
                }
            }
        }
    }catch(err){
        console.log(err)
    }
    return ipArr
}


const getWlanIp = () => {
    var WlanIp = ''
    try{
        var interfaces = os.networkInterfaces().WLAN
        if(interfaces) {
            for(let ip of interfaces){
                if(ip.family=='IPv4'){
                    WlanIp = ip.address
                }
            }
        }else{
            console.log('无线网未连接')
        }
    }catch(err){
        console.log(err)
    }
    return WlanIp
}

module.exports.getlocalIp = getlocalIp

module.exports.getWlanIp = getWlanIp 
