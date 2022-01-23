const mongoose = require("mongoose");

const ArrivalsScheme = new mongoose.Schema(
    {
        time: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        flight: {
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

module.exports = mongoose.model('arrivals', ArrivalsScheme)