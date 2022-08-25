import { injectable } from "inversify"
import { DatabaseManager } from "../../config/db/db"
import { Course } from "../entities"
import { validate as isUUID } from "uuid"
import { ObjectID } from "mongodb"

@injectable()
export class CourseService {
  private _mongoManager: DatabaseManager

  constructor(
    mongoManager: DatabaseManager,
  ) {
    this._mongoManager = mongoManager
  }

  async getAll(): Promise<Course[]> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Course)
    const courses = await repository.find()

    return new Promise((resolve) => {
      resolve(courses)
    })
  }

  async create(course: Course): Promise<Course> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Course)
    await repository.save(course)

    return new Promise((resolve) => {
      resolve(course)
    })
  }

  async update(id: string, course: Course): Promise<Course> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Course)
    await repository.updateOne({ _id: new ObjectID(id) } as any, { $set: course })

    await this._mongoManager.close()

    return new Promise((resolve) => {
      resolve(course)
    })
  }

  async findOne(id: string): Promise<Course> {
    const repository = await this._mongoManager.getRepository(Course)
    const course = await repository.findOne({ _id: new ObjectID(id) } as any)
    return new Promise((resolve) => {
      resolve(course)
    })
  }
}
