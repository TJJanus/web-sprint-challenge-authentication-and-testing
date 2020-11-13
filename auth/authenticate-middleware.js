/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };


const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../auth/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        res.status(401).json({ message: 'We want a token' })
        return;
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if(err){
            res.status(401).json({ message: 'bad token' })
            return;
        }
        console.log('decoded token ->', decoded)
        req.decodedJwt = decoded;
        next();
    })
}