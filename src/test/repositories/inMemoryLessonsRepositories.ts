import { Lesson } from "@prisma/client";
import crypto from 'node:crypto'
import { LessonsRepository, CreateLessonData } from "../../repositorys/lessonsRepository";


export class InMemoryLessonRepositories implements LessonsRepository{
    public items: Lesson[] = [];
    
    async create(data: CreateLessonData){
        this.items.push({
            id: crypto.randomUUID(),
            title: data.title,
            description: data.description ?? null,
            
        })
    }
}