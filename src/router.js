const express = require('express')
const router = express.Router()

module.exports = ()=>{

    router.get('/', (req, res)=> res.render('home'))

    router.get('/2', (req, res)=> res.render('view2'))

    router.get('/code', (req, res)=> res.render('code'))

    router.get('/desing', (req, res)=> res.render('desing'))

    router.get('/gaming', (req, res)=> res.render('gaming'))

    router.get('/pics', (req, res)=> res.render('pics'))

    router.get('/d/:id', (req, res)=>{

    const {id} = req.params

    res.download(`src/public/images/wallpapers/${id}`)

    })

    return router
}