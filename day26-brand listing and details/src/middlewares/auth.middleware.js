// This file contains the verification of user login . In other words, user lea login token lea gareko ho ki haina vanera verify garere system/webstie ko access dincha.

require("dotenv").config();
const jwt = require("jsonwebtoken");
const userService = require("../modules/user/user.service");
const authService = require("../modules/auth/auth.service");

const checklogin = async (req, res, next) => {
  try {
    let token = req.headers["authorization"] || null; // Yesle chai hami lea postman ma lekheko header ko authorization token lincha
    if (!token) {
      throw { status: 401, message: "Token expected" };
    }

    // Beared token
    token = token.split(" ").pop(); // It splits the bearer and token and we get the token only means "Bearer token" => ["Bearer","Token"]

    // PAT store day 24
    const pat = await authService.getPATDATA({ accessToken: token }); // It sets the token value to the accessToken

    if (pat) {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      const userExists = await userService.getSingleUserByFilter({
        _id: data.sub,
      });

      if (!userExists) {
        // Yo code lea chai yedi hami lea yo user lai db bata delete garyo vane yesko token ko 3hrs ko jun tyo time cha teslai pani delete handinu paryo
        throw { status: 401, message: "User doesn't exits anymore" };
      } else {
        // Yeti lekhnu ko karan k ho vane user ko aaba j pani login middleware haru yespachi aauncha teslai yesbata lincha
        req.authUser = {
          _id: userExists._id,
          name: userExists.name,
          email: userExists.email,
          role: userExists.role,
          image: userExists.image,
        };
        req.currentsession=pat  // It is required so that we can delete the token . Yesma chai hami lea token haru saab req.currentsession ma store gare
        next();
      }
    } else {
      throw { status: 401, message: "Token broken or doesn't exits" };
    }
  } catch (exception) {
    next(exception);
  } // it calls next middleware
};

module.exports = checklogin;
