import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"

@Entity("courses")
export class Course {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  name: string

  @Column()
  duration: string

  @Column()
  has_certification: boolean

  @Column()
  certification: string

  @Column()
  partner: string
}
