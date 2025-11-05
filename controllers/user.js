const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDatabase().db().collection('users').find();
        const users = await result.toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getSingle = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
        const users = await result.toArray();
        if (users.length === 0) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getAll,
    getSingle
};