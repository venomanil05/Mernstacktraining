import jwt from 'jsonwebtoken';

const createToken = (_id, res) => {
   const token = jwt.sign({_id}, 'mysecretkey', {
    expiresIn:'1m'
   });
   res.cookie('jwt',token,{
    maxAge: 3 * 24 * 60 *60 * 1000,
   });
};

export default createToken;