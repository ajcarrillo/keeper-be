import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"
import { Category } from "./category.entity"

@Entity("courses")
export class Course {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  name: string

  @Column((type) => Category)
  category: Category

  @Column()
  duration: string

  @Column()
  has_certification: boolean

  @Column()
  certification: string

  @Column()
  partner: string
}
