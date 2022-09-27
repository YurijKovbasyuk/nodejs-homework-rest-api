
const getCurrent = async (req, res) => {

    return res.json(req.user)
}

module.exports = getCurrent