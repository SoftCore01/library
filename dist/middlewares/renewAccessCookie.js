export default function renewAccessCookie(req, res, next) {
    /* if (!req.session.user) return res.status(401); */
    res.cookie("access", "true", {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 10,
    });
    next();
}
