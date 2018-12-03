const router = require('express').Router();
var multer = require('multer')
var upload = multer({ dest: 'E:\GitHub Desktop Local\net_shop\server_shop\asset\imges' })

router.post('/', upload.any(), function (req, res) {
    console.log(req.files);
    console.log(req.body);
    res.end('上传成功');
})

module.exports = router;