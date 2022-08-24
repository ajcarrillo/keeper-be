import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"

@Entity("partners")
export class Partner {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  name: string
}
