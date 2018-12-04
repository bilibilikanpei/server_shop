var fs = require('fs');
const router = require('express').Router();
var multer = require('multer')
var upload = multer({ dest: 'asset/imges/' })

router.post('/', upload.any(), function (req, res) {
    console.log(req.files);
    console.log(req.body);

    var des_file = 'asset/imges/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
                console.log(response);
                res.end(JSON.stringify(response));
            }
        });
    });

    res.end('上传成功');
})

module.exports = router;