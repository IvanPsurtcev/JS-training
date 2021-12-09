const { Router } = require('express')
const Ling = require('../models/Ling')
const router = Router()

router.get('/', async (req, res) => {
    const lings = await Ling.find({})

    res.render('index', {
        title: 'Lingua list',
        isIndex: true,
        lings
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create ling',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const ling = new Ling({
        title: req.body.title
    })

    await ling.save()
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const ling = await Ling.findById(req.body.id)

    ling.completed = !!req.body.completed
    await ling.save()

    res.redirect('/')
})

module.exports = router