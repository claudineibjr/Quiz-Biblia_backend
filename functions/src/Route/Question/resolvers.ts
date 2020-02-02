import Question, { QuestionFilter } from "../../Model/Question";
//import QuestionServices from "../../Services/QuestionServices";

function getQuestion(userAnswered: Array<number>, questionFilter: QuestionFilter): Question {
    return new Question('', 0, [], '', 1, 1, 1, '');
}

function getQuestionById(idQuestion: number): Question {
    return new Question('', 0, [], '', 1, 1, 1, '');
}

export const resolvers = {
    Query: {
        getQuestion: (_context: any, {userAnswered, questionFilter}: any) => getQuestion(userAnswered, questionFilter),
        getQuestionById: (_context: any, {idQuestion}: any) => getQuestionById(idQuestion)
    }/*,

    Mutation: {
        
    }*/
}