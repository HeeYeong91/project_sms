// 학생객체 생성을 위한 틀(클래스) (2023-06-27)
class Student {
  // 정적(static) 속성 및 메소드 추가
  static schoolName = "HY 초등학교";

  // 생성자
  constructor(ssn, name, korean, english, math) {
    // this = {};
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
    // return this;
  }

  getSum() {
    return this.korean + this.english + this.math;
  }

  getAvg() {
    return this.getSum() / 3;
  }

  // toString() 오버라이딩
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAvg().toFixed(2)}`;
  }
}

export { Student };