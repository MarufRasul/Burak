// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

//TASK - G;
function getHighestIndex(arr: number[]): number {
  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
console.log(getHighestIndex([10, 50, 30, 50, 40])); // 1
console.log(getHighestIndex([3, 7, 7, 2, 7])); // 1
console.log(getHighestIndex([100, 200, 300, 400])); // 3

console.log('Hello world!');
