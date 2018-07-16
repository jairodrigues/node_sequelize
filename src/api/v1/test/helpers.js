/*eslint-disable */

import supertest from 'supertest';
import chai from 'chai';
import app from '../../../index';
import jwt from 'jwt-simple';

const config = require('../../../config/index');

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
global.tokenFake = jwt.encode({ id: 1 }, config.jwtSecret);
