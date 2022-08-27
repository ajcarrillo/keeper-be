import { inject, injectable } from "inversify"
import { TYPES } from "../../config/types"
import { CourseRepositoryInterface } from "../interfaces/course-repository.interface"
import Course from "../entities/course.model"
import { CreateCourseDto } from "../dto/create-course.dto"
import { plainToClass } from "class-transformer"
import { validateOrReject } from "class-validator"

//import { UpdateCourseDto } from "../dto/update-course.dto"

@injectable()
export class CourseService {

  constructor(
    @inject(TYPES.CourseRepositoryInterface) private _courseRepository: CourseRepositoryInterface,
  ) {
  }

  async getAll(): Promise<typeof Course[]> {
    const courses = await this._courseRepository.all(["category", "partner"])

    return new Promise((resolve) => {
      resolve(courses)
    })
  }

  async create(course: CreateCourseDto): Promise<typeof Course> {
    try {
      let createCourseDto: CreateCourseDto = plainToClass(CreateCourseDto, course)
      await validateOrReject(createCourseDto)

      //TODO: populate category and partner
      const newCourse = await this._courseRepository.save(course)

      return new Promise((resolve) => {
        resolve(newCourse)
      })
    } catch (e) {
      return new Promise((resolve) => {
        resolve(e)
      })
    }
  }

  async update(id: string, updateCourse: typeof Course) {
    throw new Error("Method not implemented.")
    // try {
    //   let updateCourseDto: UpdateCourseDto = plainToClass(UpdateCourseDto, updateCourse)
    //   await validateOrReject(updateCourseDto)
    //
    //   const course = await this.findOne(id)
    //
    //   //TODO: move validation to method findeOne
    //   if(!course) throw new Error("Course not found")
    //
    //   const newCourse = {...course, ...updateCourse} as typeof Course
    //
    //   const updatedCourse = await this._courseRepository.updateById(id, newCourse)
    //
    //   return new Promise((resolve) => {
    //     resolve(updatedCourse)
    //   })
    // } catch (e) {
    //   return new Promise((resolve) => {
    //     resolve(e)
    //   })
    // }
  }

  async findOne(id: string): Promise<typeof Course> {

    const course = await this._courseRepository.getById(id)

    return new Promise((resolve) => {
      resolve(course)
    })
  }
}
