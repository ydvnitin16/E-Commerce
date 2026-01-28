import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, user) => {
    const expireTokenIn = "30d";
    const expireTokenCookieIn = 30 * 24 * 60 * 60 * 1000; // 30 days

    const token = jwt.sign(
        {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image || null,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: expireTokenIn },
    );

    res.cookie("authHeader", `Bearer ${token}`, {
        httpOnly: true,
        secure: process.env?.NODE_ENV === "production",
        sameSite: process.env?.NODE_ENV === "production" ? "none" : "lax",
        maxAge: expireTokenCookieIn,
    });
};

export default generateTokenAndSetCookie;
