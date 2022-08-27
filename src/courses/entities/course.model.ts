import mongoose from "mongoose"

const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  duration: { type: String, required: true },
  has_certification: { type: Boolean, default: false },
  certification: { type: String },
  partner: { type: mongoose.Schema.Types.ObjectId, ref: "Partner" },
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

const Course = mongoose.models.Course || mongoose.model("Course", schema)
export default Course
