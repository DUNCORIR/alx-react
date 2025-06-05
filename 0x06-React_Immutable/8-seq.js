import { Seq } from 'immutable';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function printBestStudents(grades) {
    // Use seq to iterate over the students and filter those with a grade below 70
    const bestStudents = Seq(students)
        .filter(student => student.score >= 70)
        .map(student => ({
            score: student.score,
            firstname: capitalize(student.firstName),
            lastname: capitalize(student.lastName)
        }))
        .toJS(); // Convert Lazy Seq to regular JS object
    console.log(bestStudents);
}