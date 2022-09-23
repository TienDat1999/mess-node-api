import jwt from 'jsonwebtoken'

export const verifyToken = (request, response, next) => {
    debugger
    const token = request.header('authorization');
    const tk = token.replace('Bearer ','')
    if (!token) return response.status(401).send('Access Denied');

    try {
       jwt.verify(tk, 'VkYp3s6v9y$B?E(H+MbQeThWmZq4t7w!');
        next();
    } catch (err) {
        return response.status(400).send('Invalid Token');
    }
};
