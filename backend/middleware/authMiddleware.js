const jwt = require("jsonwebtoken");   //import jwt token.
 
exports.protect = (req, res, next) => {

    const authHeader = req.headers.authorization;  //get the token from the request header.

    if (!authHeader) {

        return res.status(401).json({
            success: false,
            message: "No token provided"     //if no token is provided, return 401 unauthorized error.
        });

    }

    const token = authHeader.split(" ")[1];   //split the token from the header and get the token value.

    try {

        const decoded = jwt.verify(
            token,                                 //verify the token using the secret key stored in the environment variable.
            process.env.JWT_SECRET
        );

        req.user = decoded;                         //store the decoded token in the request object for further use in the route handler.

        next();

    }
    catch (error) {

        res.status(401).json({
            success: false,                          //if the token is invalid or expired, return 401 unauthorized error.
            message: "Invalid token"
        });

    }

};