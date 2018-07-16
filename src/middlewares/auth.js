import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

module.exports = app => {
  const { db } = app.config;
  const cfg = app.config.index;
  const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  const strategy = new Strategy(params, (payload, done) => {
    db.User.findById(payload.id)
      .then(user => {
        if (user) {
          return done(null, {
            id: user.id,
            email: user.email,
          });
        }
        return done(null, false);
      })
      .catch(error => done(error, null));
  });
  passport.use(strategy);
  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', cfg.jwtSession),
  };
};
