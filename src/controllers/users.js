const express = require ('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Mateo'
        },
        {
            id: 2,
            name: 'Marta'
        },
    ]
  res.json(users);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUsers = (req, res) => {
    const user = req.body;
    user.id = 12312;
    const result = {
        message: 'user created',
        user
    }
  res.status(201).json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUsers = (req, res) => {
    const id =  req.params.id;
    const user = req.body;
    user.id = id;
    const result = {
        message: 'user updated',
        user
    }
  res.status(200).json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateParcialUsers = (req, res) => {
    const id =  req.params.id;
    const user = req.body;
    user.id = id;
    const result = {
        message: 'user updated w/ patch',
        user
    }
  res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUsers = (req, res) => {
    const id=  req.params.id;
    const result = {
        message: `user id:${id} deleted`
    }
  res.json(result);
};

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
    updateParcialUsers,
    deleteUsers
}