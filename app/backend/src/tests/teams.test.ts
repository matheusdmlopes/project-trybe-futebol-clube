import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeTeams from '../database/models/SequelizeTeams';

import { mockListTeam, mockTeam } from './mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando times', function () {
  beforeEach(function () { sinon.restore(); });

  it('Retorna todos os times', async function() {
    sinon.stub(SequelizeTeams, 'findAll').resolves(mockListTeam as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(mockListTeam);
  });

  it('dados de um time específico pelo id', async function() {
    sinon.stub(SequelizeTeams, 'findByPk').resolves(mockTeam as any);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(mockTeam);
  });

  it('messagem de erro ao procurar por um time inválido', async function() {
    sinon.stub(SequelizeTeams, 'findByPk').resolves(null);

    const { status, body } = await chai.request(app).get('/teams/369');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Team not found');
  });
//
})