import jwt from 'jsonwebtoken'

export const verifyToken = (request, response, next) => {
    const token = request.header('authorization');
    if (!token) return response.status(401).send('Access Denied');
    const tk = token.replace('Bearer ','')

    try {
       jwt.verify(tk, process.env.TOKEN_SECRET);
        next();
    } catch (err) {
        return response.status(400).send('Invalid Token');
    }
};
