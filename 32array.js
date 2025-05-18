function esPalindromo  (string) {

  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}