async function login(req, res) {
    const { email, password } = req.body
    res.status(200).json({ email, password })
}

module.exports = {
    login
}
