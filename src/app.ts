import express, { response } from 'express';
import { PrismaLessonRepository } from './prisma/PrismaLessonsRepository';
import { CreateLesson } from './services/CreateLesson';

export const app = express();

app.use(express.json());

app.post('/leassons', async (req, res) => {

    const {title, description} = req.body;

    const prismaLessonsRepository = new PrismaLessonRepository ();
    const createLesson = new CreateLesson(prismaLessonsRepository);

    try{
        await createLesson.execute({title, description})

        return res.status(201).send();
    }catch(err: any) {
        return res.status(500).json({
            error: err.message
        })
    };


})