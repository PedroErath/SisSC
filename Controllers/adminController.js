const User = require('../Models/user');

const AllUsers = (req, res, next) => {
    /* Searching user */
    User.find({}, async (err, results) => {
        try {
            const docs = await User.find({});
            if (!docs[0]) {
                return res.json({
                    success: false,
                    message: 'No user found'
                });
            }
            res.json({
                success: true,
                data: results
            })
        } catch (error) {
            res.json({
                success: false,
                message: err.message
            })
        }
    });
};

const deleteUser = async (req, res, next) => {
    let id = req.body.id
    if (!id) return res.json({
        success: false,
        message: 'User not found',
    })

    /*     try {
            let result = User.findByIdAndDelete(id);
            res.json({
                success: true,
                message: 'User deleted',
                data: result
            })
        } catch (error) {
            res.json({
                success: false,
                message: 'User not deleted',
                data: error.message
            })
        } */
    User.findByIdAndDelete(id, (err, result) => {
        if (!err && result) {
            res.json({
                success: true,
                message: 'User deleted',
                data: result
            })
        } else {
            res.json({
                success: false,
                message: 'User not deleted',
                data: err
            })
        }
    })
}

module.exports = { AllUsers, deleteUser }