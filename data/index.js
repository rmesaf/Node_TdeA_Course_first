const { printHeader, printCell } = require ('../ui');
const { enrollment } = require ('../utils');
const continuousEducation = {
    courses: [
        {
            id: 10001,
            name: 'English',
            duration: '40',
            cost: '$1.000.000'
        },
        {
            id: 10002,
            name: 'Node Fundamentals',
            duration: '20',
            cost: '$500.000'
        },
        {
            id: 10003,
            name: 'Education and TIC',
            duration: '40',
            cost: '$450.000'
        },
        {
            id: 10004,
            name: 'Photography',
            duration: '80',
            cost: '$800.000'
        },
        {
            id: 10005,
            name: 'Marketing',
            duration: '40',
            cost: '$.1500.000'
        }
    ],
    printCourses: function(){
        printHeader();
        this.courses.map( (course, index) =>
            setTimeout(() => {
                this.printCourse(course);
                printCell();
            }, 2000 * index)
        );
    },
    getCourse: function(courseId) {
        try {
            const [first, rest] = this.courses.filter( course => course.id === courseId);
            if (!first) throw "Course unavailable. Please try again.";
            this.printCourse(first);
            return first;
        } catch(err){
            console.log(err);
        }
    },
    printCourse: function(course){
        console.log(`${course.id}. ${course.name}. Duration: ${course.duration}. Cost: ${course.cost}`);
    },
    subscribeStudent: function(info){
        try{
            const { i: courseId, n: studentName, d: studentDocumentNumber } = info;
            const course = this.getCourse(courseId);
            if(!course) throw ''
            enrollment({course, studentName, studentDocumentNumber});
        }catch (err) {}
    }
}

module.exports = {
    continuousEducation,
}