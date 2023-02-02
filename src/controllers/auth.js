import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import UserSchema from '../models/users.js'
import registerValidator from '../validations/auth.js'

export const RegisterAccount = async (req, res) => {
  debugger
  //1. validation form
  const { error } = registerValidator(req.body)
  if (error) return res.status(422).send(error.details[0].message);
  //2. check email whether exist or not
  const checkEmailExist = await UserSchema.findOne({ email: req.body.email }); 
  if (checkEmailExist) return res.status(422).send('Email is exist');

  //3. gen cryptography
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  
  const user = new UserSchema({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashPassword,
  })

  try {
    await user.save()
    res.json({message: 'create user success'})
  } catch (err) {
    res.json({ message: err.message })
  }
}

export const Login = async (req, res) => {
  const user = await UserSchema.findOne({email: req.body.email});
  const response = {
    statusCode: 422,
    message: 'Email or Password is not correct',
    data: null
  };
  if (!user) {
    return res.status(422).json(response);
  }

  const checkPassword = await bcrypt.compare(req.body.password, user.password);

  if (!checkPassword) return res.status(422).json(response);

  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });
  // res.header('auth-token', token).send(token);
  res.json({
    statusCode: 200,
    message: 'successfully',
    data: {
      token: token
    }
  })
}