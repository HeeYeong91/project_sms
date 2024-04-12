import { Student } from "./module/student.js";
import { StudentRepository } from "./module/student-repository.js";
import { EventHandler } from "./module/event-handler.js";

// app (2023-06-29)
const studentRepository = new StudentRepository();

// 테스트를 위한 더미데이터  입력
// studentRepository.addStudent(new Student(1, '김기정', 90, 90, 70));
// studentRepository.addStudent(new Student(2, '이수근', 80, 60, 50));
// studentRepository.addStudent(new Student(3, '강호동', 100, 50, 85));
// studentRepository.addStudent(new Student(4, '홍길동', 95, 95, 98));
// studentRepository.addStudent(new Student(5, '유재석', 15, 55, 95));

let eventHandler = new EventHandler();
eventHandler.eventRegist();

export { studentRepository };