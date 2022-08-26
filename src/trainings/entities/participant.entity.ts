import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"

@Entity("participants")
export class Participant {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  email: string
}
