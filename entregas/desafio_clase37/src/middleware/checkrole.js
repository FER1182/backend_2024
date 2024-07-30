
import passport from 'passport';


// Middleware para verificar el rol
const authorizeRole = (roles) => {
    return (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user) => {
            if (err || !user) {
                return res.status(401).json({ message: 'No autorizado' });
            }

            // Verificar el rol
            if (roles.includes(user.role)) {
                req.user = user;
                next();
            } else {
                return res.status(403).json({ message: 'Acceso denegado' });
            }
        })(req, res, next);
    };
};

export default authorizeRole;