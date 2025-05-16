function doWhile(num) {
  let i = 0;
  let result = '';
  do {
    result += num + ' ';
    i++;
  } while (i < 10);
  return result.trim();
}