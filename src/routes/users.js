const { Router } = require ('express');
const { 
    getAllUsers,
    createUsers,
    updateUsers,
    updateParcialUsers,
    deleteUsers
} = require ('../controllers/users');

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUsers);
router.put('/:id', updateUsers);
router.patch('/:id', updateParcialUsers);
router.delete('/:id', deleteUsers);


module.exports = router; 