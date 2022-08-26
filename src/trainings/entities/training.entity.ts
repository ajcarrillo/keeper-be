import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"
import { Category } from "../../courses/entities"
import { Client } from "../../clients/entities"
import { Participant } from "./participant.entity"

@Entity("trainings")
export class Training {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  name: string

  @Column((type) => Category)
  category: Category

  @Column((type) => Client)
  client: Client

  @Column()
  start_date: Date

  @Column()
  end_date: Date

  @Column()
  language: string

  @Column()
  has_certification_included: boolean

  @Column()
  hours: number

  @Column()
  price: number

  @Column((type) => Participant)
  participants: Participant[]
}
