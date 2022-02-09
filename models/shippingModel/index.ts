import {connection , Schema, model} from 'mongoose'
import {Shipping} from '../../types/index'

delete connection.models["Shipping"]

const shippingSchema = new Schema<Shipping>({
    countries:[{
        name:String,
        code:String,
        cities: [String]
    }]
})

export default model<Shipping>("Shipping", shippingSchema)