/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
  if (x === 0) return 0;
    
  var res, arr1=[], arr2=[];
    
  arr1 = Math.abs(x).toString().split('');
    
  for (let i=arr1.length - 1;i>=0; i--) {
    if (arr2.length === 0 && Number(arr1[i]) === 0) {
      continue;
    } else {
      arr2.push(arr1[i]);
    }
  }
  res = Number(arr2.join(''));
  if (res > 4294967295) return 0;
  return x > 0 ? res : -res;
};