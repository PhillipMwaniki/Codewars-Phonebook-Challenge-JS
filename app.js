var fs = require('fs')
var data = fs.readFileSync('contacts.txt', 'utf8');
var es = data.split('\n');
var phone = /\+([\d-]+)/
var address = /<(.*)>/
es.map((item, index) => {
    var w = phone.exec(item)
    var s = item.replace(phone, "")
    var x = address.exec(s)
    var y = s.replace(address, "")
    var str2 = y.replace(/\\n/, "")
    console.log(index + ') phone=>' + w[1] + " name=>" + x[1] + " adress=>" + str2)
})