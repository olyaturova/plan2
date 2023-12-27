const ScheduleModel = require('./ScheduleModel');

module.exports.getSchedule = async (req, res) => {
    const mySchedule = await ScheduleModel.find()
    res.send(mySchedule)
}

module.exports.saveSchedule = async (req, res) => {
    const {title} = req.body
    ScheduleModel.create({title})
    .then((data) => {console.log('Schedule added')
    res.send(data)
})
}

module.exports.deleteSchedule = async (req, res) => {
    const {_id} = req.body
    ScheduleModel.findByIdAndDelete(_id)
    .then(() => res.send('Schedule deleted'))
}

module.exports.editSchedule = async (req, res) => {
    const {_id, title} = req.body
    ScheduleModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Schedule updated'))
} 