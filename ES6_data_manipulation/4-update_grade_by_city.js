export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((stdCity) => {
      const newGrade = newGrades.filter((nwgde) => nwgde.studentId === stdCity.id);
      const student = stdCity;
      if (newGrade.length === 1) student.grade = newGrade[0].grade;
      else student.grade = 'N/A';
      return student;
    });
}
