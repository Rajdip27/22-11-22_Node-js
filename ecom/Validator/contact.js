const { check } = require('express-validator');

exports.store=[
    
    check('title', "Invalid title").not().isEmpty().trim(),
    check('details', "Invalid details").not().isEmpty().trim(),
    check('image', "Invalid image").not().isEmpty().trim()
]

exports.update=[
    check('title', "Invalid title").not().isEmpty().trim(),
    check('details', "Invalid details").not().isEmpty().trim(),
    check('image', "Invalid image").not().isEmpty().trim()
]