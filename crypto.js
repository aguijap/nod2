const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakeso')
                   .digest('hex');
console.log(hash)


const secret2 = 'abcdefg';
const hash2 = crypto.createHmac('sha256', secret2)
                   .update('I love cupcakes 33')
                   .digest('hex');
console.log(hash2)
// 