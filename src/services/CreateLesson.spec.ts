
import { InMemoryLessonRepositories } from "../test/repositories/inMemoryLessonsRepositories";
import { CreateLesson } from "./CreateLesson";

test('should be able to create new lesson', async () => {
    const inMemoryLessonRepositories = new InMemoryLessonRepositories
    const createLesson = new CreateLesson(inMemoryLessonRepositories);

    await expect(createLesson.execute({title:"Nova Aula"}))
    .resolves
    .not
    .toThrow();

    expect(inMemoryLessonRepositories.items).toEqual
        (expect.arrayContaining([
            expect.objectContaining({
                title: "Nova Aula",
            })
        ])
    )
});

test('should NOT be able to create a new lesson with invalid title', async () => {
    const inMemoryLessonRepositories = new InMemoryLessonRepositories
    const createLesson = new CreateLesson(inMemoryLessonRepositories);

    await expect(createLesson.execute({title:""}))
    .rejects
    .toThrow();

    expect(inMemoryLessonRepositories.items).toEqual([])

});