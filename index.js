const { continuousEducation } = require ('./data');
const { courseOptions, subscribeCourseOptions } = require ('./options');

const argv = require('yargs')
    .updateStrings({
        'Commands:': 'Available Methods:\n',
    })
    .command(['listCourses', '*'], 'List of courses', () => continuousEducation.printCourses())
    .command('getCourse', 'Get course info usign course id', courseOptions ,(args) => continuousEducation.getCourse(args.i))
    .command('enrollCourse', 'Enroll student in a course', subscribeCourseOptions ,({i, n, d}) => continuousEducation.subscribeStudent({i, n, d}))
    .command('inscribir', 'Enroll student in a course', subscribeCourseOptions, ({i, n, d}) => continuousEducation.subscribeStudent({i, n, d}))
    .demandCommand().argv;

