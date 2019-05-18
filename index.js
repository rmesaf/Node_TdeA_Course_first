const { continuousEducation } = require ('./data');
const { courseOptions } = require ('./options');

const argv = require('yargs')
    .updateStrings({
        'Commands:': 'Available Methods:\n',
        'index': ''
    })
    .command('listCourses', 'List of courses', () => continuousEducation.printCourses())
    .command('getCourse', 'Get course info usign course id', courseOptions ,(args) => continuousEducation.getCourse(args.i))
    .command('enrollCourse', 'Enroll student in a course',subscribeCourseOptions, (args) => continuousEducation.printCourses())
    .command('inscribir', 'Enroll student in a course', subscribeCourseOptions, (args) => continuousEducation.printCourses())
    .demandCommand()
    .argv;

