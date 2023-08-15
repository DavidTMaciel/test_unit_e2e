import { LessonsRepository } from "../repositorys/lessonsRepository";


interface CreateLessonRequest{

    title: string,
    description?: string
}

export class CreateLesson{
    constructor(
        private lessonsRepository: LessonsRepository,
    )
{}

    async execute({title, description}: CreateLessonRequest){

        if(!title){
            throw new Error('Title undefined');
        }


        await this.lessonsRepository.create({
            title,
            description
        })
    }
}