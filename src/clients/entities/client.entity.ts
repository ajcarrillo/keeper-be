import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"

@Entity("clients")
export class Client {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  name: string

  @Column()
  contact: string

  @Column()
  email: string
}
