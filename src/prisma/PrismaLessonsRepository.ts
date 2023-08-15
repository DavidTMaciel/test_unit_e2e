import { LessonsRepository, CreateLessonData } from "../repositorys/lessonsRepository";
import { prisma } from "../prisma";


export class PrismaLessonRepository implements LessonsRepository{
    async create(data: CreateLessonData): Promise<void> {
        await prisma.lesson.create({
            data
        })
    }
}