const mongoose = require("mongoose");

const DepartureScheme = new mongoose.Schema(
    {
        time: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        flight: {
            type: String,
            required: true
        },
        gate: {
            type: String,
            required: true
        },
        remarks: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('departures', DepartureScheme)