function protect(req, res, next) {
    console.log('secret!!')

    next();
}

module.exports = protect