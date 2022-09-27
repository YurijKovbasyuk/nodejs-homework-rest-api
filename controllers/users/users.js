
const getCurrent = async (req, res) => {
    console.log(req.user)
    return res.json(req.user)
}

module.exports = getCurrent