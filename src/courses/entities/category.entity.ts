import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"

@Entity("categories")
export class Category {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  name: string
}
