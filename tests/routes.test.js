const request = require('supertest')
const app = require('../src/server')

describe('API Post endpoints', () => {
    it('Erro al crear nuevo usuario sin datos', (done) => {
        const user = {
            name: '',
            email: '',
            password: ''
        }

        request(app).post('/api/users')
        .send(user)
        .end((err, res) => {
            const { statusCode } = res.body.output

            expect(statusCode).toBe(422)
            expect(res.body.data).not.toBe(null)
            done()
        })
    })

    it('Crear nuevo usuario sin datos', (done) => {
        const user = {
            name: 'test user',
            email: 'testuser@gmail.com',
            password: 'a123b456c'
        }

        request(app).post('/api/users')
        .send(user)
        .end((err, res) => {
            expect(res.status).toBe(200)
            expect(res.body).not.toBe(null)
            done()
        })
    })

    it('iniciar sesion', (done) => {
        const user = {
            email: '',
            password: ''
        }

        request(app).post('/api/login')
        .send(user)
        .expect(200)
        .end((err, res) => {
            done()
        })
    })
})