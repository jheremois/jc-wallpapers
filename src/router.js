const express = require('express')
const router = express.Router()

module.exports = ()=>{

    router.get('/', (req, res)=> res.render('home'))

    router.get('/d/:id', (req, res)=>{

    const {id} = req.params

    res.download(`src/public/images/wallpapers/${id}`)

    //res.download('C:/Users/jhere/Desktop/jrcw/src/public/images/wallpapers/wallpaper\ \p\ \(2\).jpg')

    })

    return router
}