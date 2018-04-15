const redis = require('redis');

const pub = redis.createClient({'host': 'localhost', 'port': 6379});

var cont = 1;

setInterval(function() {
    pub.rpush("importantevent", cont);
    pub.publish("teste", "haaaa");
    cont++;
}, 5000);
