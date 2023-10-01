// 여러 학생 목록 관리 객체 (2023-06-26)
class StudentRepository {
  
  constructor() {
    this.students = [];
  }

  // 학생 추가
  addStudent(student) {
    this.students.push(student);
  }

  // 학생 전체 목록 반환
  getStudents() {
    return this.students;
  }

  // 학번으로 학생 검색
  findBySsn(ssn) {
    return this.students.find(student => student.ssn === ssn ? true : false);
  }

  // 이름으로 학생 검색
  findByName(name) {
    return this.students.filter(student => student.name === name ? true : false);
  }

  // 학번으로 학생 삭제
  removeBySsn(ssn) {
    let deleted = false;
    this.students.forEach((student, index) => {
      if (student.ssn === ssn) {
        this.students.splice(index, 1);
        deleted = true;
      };
    });
    return deleted;
  }

  // 평균 범위로 검색
  findByRange(start, end) {
    let list = [];
    this.students.forEach(student => {
      if (student.getAvg() >= start && student.getAvg() <= end) {
        list.push(student);
      };
    });
    return list;
  }

  // 정렬하여 전체 검색
  findAllBySort(fn) {
    return this.students.sort(fn);
  }
}

export { StudentRepository };