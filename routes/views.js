const router = require('express').Router()

router.get('/index.html', (req, res) => {
  res.render('./index.html')
})
router.get('/login.html', (req, res) => {
  res.render('./login.html')
})
router.get('/self.html', (req, res) => {
  res.render('./self.html')
})
router.get('/rpassword.html', (req, res) => {
  res.render('./rpassword.html')
})

module.exports = router