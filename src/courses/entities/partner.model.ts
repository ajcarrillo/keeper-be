import mongoose from "mongoose"

const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String },
})

schema.set("toObject", { virtuals: true })
schema.set("toJSON", {
  virtuals: true,
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Partner = mongoose.models.Partner || mongoose.model("Partner", schema)
export default Partner
