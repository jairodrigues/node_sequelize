import https from 'https';
import fs from 'fs';

module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    const credentials = {
      key: fs.readFileSync('jairodrigues.key', 'utf8'),
      cert: fs.readFileSync('jairodrigues.cert', 'utf8'),
    };
    app.config.db.sequelize.sync().done(() => {
      https.createServer(credentials, app).listen(app.get('port'), () => {
        console.log(`Users API - porta ${app.get('port')}`);
      });
    });
  }
};
