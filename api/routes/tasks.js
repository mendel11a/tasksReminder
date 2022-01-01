const router = require("express").Router();
const Reminder = require("../models/Reminder");

//crete a new reminder
router.post("/timer", async (req, res) => {
    const newReminder = new Reminder(req.body);
    try {
        const savedReminder = await newReminder.save();
        res.status(201).json(savedReminder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update reminder
router.put("/timer",async (req, res) => {
    try {
        task = await Reminder.findOneAndUpdate(
            {id:req.body.id},
            {completed:req.body.completed},
            {new:true}
        );
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET Reminders

router.get("/list-timers", async (req, res) => {
    let type = req.query.completed;
    let reminders;
    try {
        if (type === "true") {
            reminders = await Reminder.aggregate([
                { $match: { completed: true } }
            ]);
        }
        else if (type === "false") {
            reminders = await Reminder.aggregate([
                { $match: { completed: false } }
            ]);
        }
        else {
            reminders = await Reminder.find();
        }
        res.status(200).json(reminders.reverse());
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
