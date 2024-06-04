import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        let message;
      
        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          message = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`
	  students.push(message);
	}
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter should be CS or SWE');
    } else {
      readDataBase(DATABASE)
        .then((fields) => {
	  const students = fields[major];

          response.send(200, `List: ${students.join(', ')}`);
	})
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;
