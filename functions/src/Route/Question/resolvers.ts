import Question, { QuestionFilter } from "../../Model/Question";
import QuestionServices from "../../Services/QuestionServices";

async function getQuestion(userAnswered: Array<number>, questionFilter: QuestionFilter): Promise<Question> {
    const question = await QuestionServices.getQuestion(userAnswered, questionFilter);
    return question;
}

async function getQuestionById(idQuestion: number): Promise<Question> {
    const question = await QuestionServices.getQuestionById(idQuestion);
    return question;
}

export const resolvers = {
    Query: {
        getQuestion: (_context: any, {userAnswered, questionFilter}: any) => getQuestion(userAnswered, questionFilter),
        getQuestionById: (_context: any, {idQuestion}: any) => getQuestionById(idQuestion)
    }
}