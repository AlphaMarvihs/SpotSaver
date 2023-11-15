const {Schema, default: mongoose} = require('mongoose')

const spotSchema = new Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, required: true,  ref: 'Users' },
    price: {type: Number, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    location: {
        lat: {type: Number, required: true},
        lon: {type: Number, required: true}
    },
    city: {type: String, required: true},
    type: {type: String, required: true},
    slots: {type: Number, required: true},
    active: {type: Boolean, required: true},
    description: String,
})

const SpotModel = mongoose.model('spots', spotSchema)

module.exports = SpotModel