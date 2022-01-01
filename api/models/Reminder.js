const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
    {
        id: { type: String, required: true},
        itemVal: { type: String, required: true},
        dateVal: { type: String },
        futureTask:{ type: Boolean, default: true },
        completed:{ type: Boolean, default: false },
    },
    { timestamps: true } //adding "created at" and "updated at" fields in the db)
);
module.exports = mongoose.model("Reminder", ReminderSchema);

