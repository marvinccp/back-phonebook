const { Strategy, ExtractJwt } = require('passport-jwt')
// const { config } = require('../../../config')


let key = 'D743DA5D6657E6A88B22FCB3D3FE9';


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key,
};

const jwtStrategy = new Strategy(options, (payload, done)=>{
  return done(null, payload)
})
console.log(jwtStrategy);
module.exports = jwtStrategy