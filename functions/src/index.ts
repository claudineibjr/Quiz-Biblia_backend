// Imports
import * as functions from 'firebase-functions';

import usersRoute from './Route/User/UsersRoute';

// #region "EndPoints"

// Users
usersRoute.createHttpServer({});
const usersRouteExpress = usersRoute.express;

export const users = functions.https.onRequest(usersRouteExpress);

// #endregion