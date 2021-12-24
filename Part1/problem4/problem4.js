function binarySearch(array, x) {
  if (!array.includes(x)) {
    return -1;
}

let beg = 0, end = array.length-1, mid = 0;
(array.length) % 2 == 0 ? mid = array.length/2 : mid = (array.length-1)/2;

while (array.indexOf(x) != mid) {
    if (array.indexOf(x) < mid) {
        beg = beg;
        end = mid;
    } else {
        beg = mid;
        end = end;
    }
    (end - beg) % 2 == 0 ? mid = beg + (end-beg)/2 : mid = beg + (end-beg-1)/2;
}
return mid;
}

module.exports = binarySearch;
