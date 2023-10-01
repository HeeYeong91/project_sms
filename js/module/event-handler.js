import { Student } from "./student.js";
import { studentRepository } from "../app.js";
import { Validator } from "../util/validator.js";

// 이벤트 처리를 객체화 (2023-06-29 ~ 30)
class EventHandler {

  constructor() { }

  // 이벤트 소스에 이벤트핸들러 등록
  eventRegist() {
    window.addEventListener('load', e => {
      const students = studentRepository.getStudents();
      students.forEach((student) => {
        this.addRank(e);
        this.addRow(student);
      });
    });

    // 등록 버튼
    document.querySelector('#addBtn').addEventListener('click', e => {
      this.addStudent(e);
    });

    // 검색 버튼
    document.querySelector('#searchBtn').addEventListener('click', e => {
      const select = document.searchForm.searchSelect;
      const value = select.options[select.selectedIndex].value;

      if (value.length == 0) { // 모든 리스트
        const tbody = document.querySelector('.table-body');
        const students = studentRepository.getStudents();

        tbody.innerHTML = '';
        students.forEach(student => {
          this.addRow(student);
        });
      } else if (value == 'ssn') { // 학번 검색
        this.findBySsn(e);
      } else if (value == 'name') { // 이름 검색
        this.findByName(e);
      };
    });

    // 삭제 버튼
    document.querySelector('#deleteBtn').addEventListener('click', e => {
      const select = document.searchForm.searchSelect;
      const value = select.options[select.selectedIndex].value;
      if (value == 'ssn') {
        this.removeByssn(e);
      } else {
        this.addAlert('선택 메뉴 중 학번을 선택해주세요', select.focus());
      };
    });

    // 정렬 기능
    document.querySelector('#sortSelect').addEventListener('change', e => {
      const select = e.target;
      const value = select.options[select.selectedIndex].value;
      const tbody = document.querySelector('.table-body');
      if (value == '') {
        const sortedList = studentRepository.findAllBySort((student1, student2) => student1.ssn - student2.ssn);
        tbody.innerHTML = '';
        sortedList.forEach(student => {
          this.addRow(student);
        });
      } else if (value == 'avgSort') {
        const sortedList = studentRepository.findAllBySort((student1, student2) => student2.getSum() - student1.getSum());
        tbody.innerHTML = '';
        sortedList.forEach(student => {
          this.addRow(student);
        });
      } else if (value == 'nameSort') {
        const sortedList = studentRepository.findAllBySort((student1, student2) => student1.name.localeCompare(student2.name));
        tbody.innerHTML = '';
        sortedList.forEach(student => {
          this.addRow(student);
        });
      };
    });
  }

  // 학생 등록
  addStudent() {
    const ssn = document.inputForm.ssn.value;
    const name = document.inputForm.name.value;
    const korean = document.inputForm.korean.value;
    const english = document.inputForm.english.value;
    const math = document.inputForm.math.value;
    const inputStudent = studentRepository.findBySsn(Number(ssn))

    // 유효성 검증 후 등록
    if (!Validator.hasText(ssn)) {
      this.addAlert('학번을 입력하세요.', document.inputForm.ssn.focus());
    } else if (inputStudent != null) {
      this.addAlert('동일한 학번이 존재합니다.', document.inputForm.ssn.focus());
    } else if (Number(ssn) < 1) {
      this.addAlert('학번은 1보다 커야 합니다.', document.inputForm.ssn.focus());
    } else if (!Validator.hasText(name)) {
      this.addAlert('이름을 입력하세요.', document.inputForm.name.focus());
    } else if (Validator.hasSpace(name)) {
      this.addAlert('이름에 공백은 존재할 수 없습니다.', document.inputForm.name.focus());
    } else if (!Validator.hasText(korean)) {
      this.addAlert('국어점수를 입력하세요.', document.inputForm.korean.focus());
    } else if (Number(korean) < 0 || Number(korean) > 100) {
      this.addAlert('0 ~ 100 사이 숫자만 입력 가능합니다.', document.inputForm.korean.focus());
    } else if (!Validator.hasText(english)) {
      this.addAlert('영어점수를 입력하세요.', document.inputForm.english.focus());
    } else if (Number(english) < 0 || Number(english) > 100) {
      this.addAlert('0 ~ 100 사이 숫자만 입력 가능합니다.', document.inputForm.english.focus());
    } else if (!Validator.hasText(math)) {
      this.addAlert('수학점수를 입력하세요.', document.inputForm.math.focus());
    } else if (Number(math) < 0 || Number(math) > 100) {
      this.addAlert('0 ~ 100 사이 숫자만 입력 가능합니다.', document.inputForm.math.focus());
    } else {
      const student = new Student(Number(ssn), name, Number(korean), Number(english), Number(math));
      studentRepository.addStudent(student);

      // student에 순위 추가
      this.addRank();

      const tbody = document.querySelector('.table-body');
      tbody.innerHTML = '';

      // 입력 받은 student 테이블 행 추가
      const students = studentRepository.findAllBySort((student1, student2) => student1.ssn - student2.ssn);
      students.forEach(student => {
        this.addRow(student);
      });

      // input 입력 값 초기화
      document.inputForm.ssn.value = '';
      document.inputForm.name.value = '';
      document.inputForm.korean.value = '';
      document.inputForm.english.value = '';
      document.inputForm.math.value = '';
    };
  }

  // 학번으로 학생 검색
  findBySsn() {
    const searchInput = document.searchForm.search.value;
    const student = studentRepository.findBySsn(Number(searchInput));
    const tbody = document.querySelector('.table-body');
    if (student == null) {
      this.addAlert('학번을 제대로 입력해주세요.', document.searchForm.search.focus());
    } else {
      tbody.innerHTML = '';
      this.addRow(student);
      document.searchForm.search.value = '';
    };
  }

  // 이름으로 학생 검색
  findByName() {
    const searchInput = document.searchForm.search.value;
    const students = studentRepository.findByName(searchInput);
    const tbody = document.querySelector('.table-body');

    if (students.length == 0) {
      this.addAlert('이름을 제대로 입력해주세요.', document.searchForm.search.focus());
    } else {
      tbody.innerHTML = '';
      students.forEach(student => {
        this.addRow(student);
      });
      document.searchForm.search.value = '';
    };
  }

  // 학번으로 학생 삭제
  removeByssn() {
    const searchInput = document.searchForm.search.value;
    const students = studentRepository.getStudents();
    const tbody = document.querySelector('.table-body');
    const findSsn = studentRepository.findBySsn(Number(searchInput));

    if (!Validator.hasText(searchInput)) {
      this.addAlert('학번을 입력해주세요.', document.searchForm.search.focus());
    } else if (findSsn == null) {
      this.addAlert('해당 학번은 존재하지 않습니다.', document.searchForm.search.focus());
    } else {
      Swal.fire({
        title: '정말 삭제 하시겠습니까?',
        text: `${Number(searchInput)}번 학생을 삭제합니다.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '삭제되었습니다!',
            `${Number(searchInput)}번 학생이 삭제되었습니다.`,
            'success'
          );

          studentRepository.removeBySsn(Number(searchInput));
          tbody.innerHTML = '';
          this.addRank();
          students.forEach(student => {
            this.addRow(student);
          });
          document.searchForm.search.value = '';
        };
      });
    };
  }

  // alert 생성
  addAlert(str, focus) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: str,
      didClose: () => {
        focus;
      }
    });
  }

  // 등수 추가
  addRank() {
    const students = studentRepository.getStudents();
    students.forEach(student => student.rank = 1);
    for (let i = 0; i < students.length; i++) {
      for (let j = 0; j < students.length; j++) {
        if (students[i].getAvg() < students[j].getAvg()) {
          students[i].rank++;
        };
      };
    };
  }

  // 테이블 행 추가
  addRow(student) {
    const tbody = document.querySelector('.table-body');
    const tr = document.createElement('tr');

    tbody.appendChild(tr);
    if (student.rank === 1) {
      tr.innerHTML =
        `<td>${student.ssn}</td>
    <td>${student.name}</td>
    <td>${student.korean}</td>
    <td>${student.english}</td>
    <td>${student.math}</td>
    <td>${student.getSum()}</td>
    <td>${student.getAvg().toFixed(2)}</td>
    <td style="color: red; font-weight: bold;">${student.rank}등<i class="fa-solid fa-crown fa-bounce fa-sm" style="color: #ff0000;"></i></td>`
    } else {
      tr.innerHTML =
        `<td>${student.ssn}</td>
    <td>${student.name}</td>
    <td>${student.korean}</td>
    <td>${student.english}</td>
    <td>${student.math}</td>
    <td>${student.getSum()}</td>
    <td>${student.getAvg().toFixed(2)}</td>
    <td>${student.rank}등</td>`
    };
  }
}

export { EventHandler };