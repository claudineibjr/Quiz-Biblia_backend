// Imports
import * as functions from 'firebase-functions';

import usersRoute from './Route/User/UsersRoute';
import questionsRoute from './Route/Question/QuestionsRoute';

// #region "EndPoints"

// Users
usersRoute.createHttpServer({});
const usersRouteExpress = usersRoute.express;

export const users = functions.https.onRequest(usersRouteExpress);

// Users
questionsRoute.createHttpServer({});
const questionsRouteExpress = questionsRoute.express;

export const questions = functions.https.onRequest(questionsRouteExpress);

// #endregion