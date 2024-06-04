import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  router.get('/', (request, resolve) => {
    AppController.getHomePage(request, resolve);
  });

  router.get('/students', (request, resolve) => {
    StudentsController.getAllStudents(request, resolve, process.argv[2]);
  });

  router.get('/students/:major', (request, resolve) => {
    StudentsController.getAllStudentsByMajor(request, resolve, process.argv[2])
  });
}

export default controllerRouting;
