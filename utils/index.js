const fs = require('fs');

const enrollment = (info) => {
    try{
        const {course, studentName, studentDocumentNumber } = info;
        const text = `${course.id}. ${course.name} - ${studentDocumentNumber}. ${studentName} \n`;
        fs.appendFileSync('./enrollment.txt', text, "UTF-8",{'flags': 'a+'}, (err) => {
            if(err) throw err;
            console.log('Student enrolled successfully');
        });
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    enrollment,
};