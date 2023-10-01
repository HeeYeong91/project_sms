// 유효성 검증 (2023-06-29 ~ 2023-06-30)
class Validator {
  /**
   * 입력 값이 있는지 확인
   * @param {string} 입력 문자열
   * @returns 문자입력유무 (true, false)
   */
  static hasText(value) {
    if (value == undefined || value.length === 0) {
      return false;
    }
    return true;
  }

  /**
   * 입력 값의 공백이 있는지 확인
   * @param {string} 입력 문자열
   * @returns 공백유무 (true, false)
   */
  static hasSpace(str) {
    const regExp = /\s/gm;
    if (regExp.test(str)) {
      return true;
    }
    return false;
  }
}

export { Validator };