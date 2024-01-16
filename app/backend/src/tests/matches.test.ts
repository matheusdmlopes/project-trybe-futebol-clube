import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeMatches from '../database/models/SequelizeMatches';

import matchMock from './mocks/matchesMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('testando matches', function () {
  beforeEach(function () { sinon.restore(); });

  it('testando se vem todas as partidas', async function() {
    
    sinon.stub(SequelizeMatches, 'findAll').resolves(matchMock as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(matchMock);
  });
});