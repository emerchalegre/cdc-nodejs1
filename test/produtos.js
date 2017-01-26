'use strict'

const express = require('./../config/express')()
const request = require('supertest')(express)

describe('#ProdutosController', () => {
	it('#listagem de produtos json', (done) => {
		request.get('/produtos')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done)
	})

	it('#cadastro de produto com dados invalidos', (done) => {
		request.post('/produtos')
			.send({titulo: "", descricao: "livro de teste"})
			.expect(400, done)
	})

	it('#cadastro de produto com dados validos', (done) => {
		request.post('/produtos')
			.send({titulo: "Teste de Livro", descricao: "livro de teste", preco: 45.5})
			.expect(302, done)
	})
})