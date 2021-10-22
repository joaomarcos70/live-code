const express = require('express')
const pessoas = require('./Pessoas-route')

module.exports = app => {
    app.use(express.json())
    app.use(pessoas)

}