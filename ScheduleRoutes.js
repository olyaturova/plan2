const{ Router } = require('express');
const { getSchedule, saveSchedule, deleteSchedule, editSchedule } = require('./ScheduleController');

const router = Router();

router.get('/', getSchedule);
router.post ('/saveSchedule', saveSchedule);
router.post ('/deleteSchedule', deleteSchedule);
router.post ('/editSchedule', editSchedule);

module.exports = router;              