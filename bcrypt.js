import express from 'express'
import bcrypt from 'bcrypt'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors(
  {
    origin: "http://localhost:5500",
    credentials: true
  }
));

app.use(cookieParser());

app.use(express.json());

let hashPassword = "";

app.get("/", (req, res) => {
  if (req.cookies.jwt) console.log(req.cookies.jwt);
  res.cookie("jwt", "This is a jwt token", {
    maxAge: 60 * 1000 * 2, // 2 minutes
    httpOnly: true,
    sameSite: "strict"
  }).status(200).send("Success");
});

app.get('/api', (req, res) => {
  bcrypt.hash('okudera2003', 10, (err, hash) => {
    if (!err) {
      hashPassword = hash;
      res.json({ password: hash });
    }
    else {
      console.log(err);
    }
  });
});

app.get('/api/check', (req, res) => {
  bcrypt.compare('okudera2003', hashPassword, (err, result) => {
    if (!err && result) {
      res.json({ password: result });
    }
    else if (err) {
      console.log(err);
    }
    else {
      res.json({ password: result });
    }
  });
});

app.listen(4000, () => {
  console.log('server is running on http://localhost:4000');
});

// jwt.verify() jwt.sign()