/* Importing model user */
const User = require('../Models/user');

/* Admin methods */
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
    /* Searching and delete user */
    User.findByIdAndDelete(id, (err, result) => {
        if (!err && result) {
            return res.json({
                success: true,
                message: 'User deleted',
                data: result
            })
        }
        res.json({
            success: false,
            message: 'User not deleted',
            data: err
        })
    })
}

/* Exporting methods */
module.exports = { AllUsers, deleteUser }