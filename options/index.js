const courseOptions = {
    course: {
        demand: true,
        alias: 'i' 
    }
}
const subscribeCourseOptions = {
    id: {
        demand: true,
        alias: 'i',
        describe: 'Course ID to which you are going to enroll', 
    },
    name: {
        demand: true,
        alias: 'n',
        describe: 'Name of the person to be enrolled',
    },
    documentNumber: {
        demand: true,
        alias: 'd',
        describe: 'Document number of the person to be enrolled'
    }
}

module.exports = {
    courseOptions,
};