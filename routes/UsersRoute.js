import express from 'express';
const router = express.Router();

import { authentification, CreateUser } from '../Controllers/userController.js';

//post methods
router.route('/create').post(CreateUser);

//delete methods
//router.route('/delete').delete(deletetask)

// modify methods 
/*
router.route('/update').put(updatetask)
router.route('/completedTask').put(completetask)
router.route('/nonCompletedTask').put(noncompletetask)
router.route('/update/description').put(updatetaskdesc)
router.route('/update/password').put(updatetaskpass)
*/

//get methods
router.route('/getpassword').get(authentification);
//router.route('/getAll').get(getalltask)
//router.route('/getAllfolder').get(getallstackfolder)
//router.route('/getAllTaskCompleted').get(getallstackcompleted)


router.use('/', (req, res, next) => {
    res.status(404).json({ error: 'page not found ' });
});

export default router;