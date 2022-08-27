import mongoose from "mongoose"

const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
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

const Category = mongoose.models.Category || mongoose.model("Category", schema)
export default Category
