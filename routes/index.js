var express = require('express');
var router = express.Router();
const formidable = require('formidable')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', (req, res) => {
  res.render('portrait')
})
router.post('/portrait', (req, res) => {
  const form = formidable({
    multiples: true,
    //设置上传文件的保存路径
    uploadDir: __dirname + '/../public/images',
    //保持文件后缀
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    let url = '/images/' + files.portrait.newFilename
    res.send(url)
  });
})

module.exports = router;
