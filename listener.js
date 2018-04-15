const redis = require('redis');
const sub = redis.createClient({'host': 'localhost', 'port': 6379});
const conn = redis.createClient({'host': 'localhost', 'port': 6379});

// Run this multiple times, simulating multiple consumer instances.

sub.on('message', (channel, message) => {
  conn.lpop("importantevent", function (err, reply) {
    if (err) {
      console.log(err)
    } else {
      console.log(reply);
    }
  });

  console.log('1 message: ' + message + ' on channel: ' + channel);
});

sub.subscribe("teste");
