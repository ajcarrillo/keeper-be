import { BaseRepositoryInterface } from "../../common/interfaces/base-repository.interface"
import Course from "../entities/course.model"

export interface CourseRepositoryInterface extends BaseRepositoryInterface<typeof Course> {

}
