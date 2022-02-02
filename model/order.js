const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref:"user" },
    store: [{
        location : { type: String, default: 'Beach Road' },
        city : { type: String, default: 'Visakhapatnam' },
        phone : { type: String, default: '9999999999' }
    }],
    status: { type: String, enum:['Ready to pickup', 'In washing', 'Ready to deliver', 'Cancelled'], default: 'Ready to pickup' },
    details: [{
        itemType: { type:String },
        quantity: { type:Number, default: 0 },
        wash: { type:String, default:false },
        iron: { type:String, default:false },
        fold: { type:String, default:false },
        pack: { type:String, default:false },
        price: { type: Number, default: 0 }
    }],
    totalQuantity : { type:Number },
    totalPrice: { type:Number }
}, { timestamps: true })

var Order = mongoose.model('Order', OrderSchema);
module.exports = Order;