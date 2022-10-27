/* Imports */
const Request = require('../Models/request');

const addRequest = (req, res, next) => {
    const docRequest = new Request({
        user: req.body.user,
        problem: req.body.problem,
        description: req.body.description,
        sector: req.body.sector,
        priority: req.body.priority
    })

    docRequest.save((err, result) => {
        if (!err) {
            return res.json({
                success: true,
                message: 'Request registered',
                data: result
            })
        }
        res.json({
            success: false,
            message: 'Request not registered',
            data: err
        })
    })
}

const loadRequest = (req, res, next) => {
    const id = req.body.idRequest
    if (!id) return res.json({
        success: false,
        message: 'Request not found'
    })

    Request.findById(id, (err, result) => {
        if (!err && result) {
            return res.json({
                success: true,
                data: result
            })
        }
        res.json({
            success: false,
            message: 'Request not found',
            data: err
        })
    })
}

const editRequest = (req, res, next) => {
    const id = req.body.id
    const docRequest = {}
    docRequest.status = req.body.status
    docRequest.answer = req.body.answer
    console.log(req.body)

    Request.findByIdAndUpdate(id, docRequest, { returnDocument: 'after' }, (err, result) => {
        if (!err) {
            return res.json({
                success: true,
                message: 'Request updated',
                data: result
            })
        }
        res.json({
            success: false,
            message: 'Request not updated',
            data: err
        })
    });
}

const listRequest = (req, res, next) => {
    Request.find({}, (err, result) => {
        if (!err && result[0]) {
            return res.json({
                success: true,
                data: result
            })
        }
        res.json({
            success: false,
            message: 'No request found',
            data: err
        })
    })
}

const deleteRequest = (req, res, next) => {
    const id = req.body.id
    if (!id) return res.json({
        success: false,
        message: 'Request not found'
    })

    Request.findByIdAndDelete(id, (err, result) => {
        if (!err && result) {
            return res.json({
                success: true,
                message: 'Request deleted',
                data: result
            })
        }
        res.json({
            success: false,
            message: 'Request not delete',
            data: err
        })
    })
}

module.exports = { addRequest, loadRequest, listRequest, editRequest, deleteRequest };