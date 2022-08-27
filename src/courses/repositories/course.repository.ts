import { injectable } from "inversify"
import { BaseRepositoryClass } from "../../common/classes/base-repository.class"
import { CourseRepositoryInterface } from "../interfaces/course-repository.interface"
import Course from "../entities/course.model"

@injectable()
export class CourseRepository extends BaseRepositoryClass<typeof Course> implements CourseRepositoryInterface {
  getModelDB(): string {
    return "Course"
  }
}
