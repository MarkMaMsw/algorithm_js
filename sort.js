// 排序算法
class Sort {
    // 选择排序 selection sort
    selectionSort(arr) {
        if (arr === null || arr.length < 2) {
            return;
        }
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            this.swap(arr, i, minIndex);
        }
    }

    // 插入排序 insertion sort
    insertionSort(arr) {
        if (arr === null || arr.length < 2) {
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
                this.swap(arr, j, j + 1);
            }
        }
    }

    // 冒泡排序 bubble sort
    bubbleSort(arr) {
        if (arr === null || arr.length < 2) {
            return;
        }
        for (let e = arr.length - 1; e > 0; e--) {
            for (let i = 0; i < e; i++) {
                if (arr[i] > arr[i + 1]) {
                    this.swap(arr, i, i + 1);
                }
            }
        }
    }

    // 数组元素互换位置
    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

const sort = new Sort();
const arr0 = [4, 2, 3, 1, 5, 6, 10, 7, 4, 2];
sort.selectionSort(arr0);
console.log(arr0)

const arr1 = [4, 2, 3, 1, 5, 6, 10, 7, 4, 2];
sort.insertionSort(arr1);
console.log(arr1)

const arr2 = [4, 2, 3, 1, 5, 6, 10, 7, 4, 2];
sort.bubbleSort(arr2);
console.log(arr2)

console.log(arr0 == arr1 && arr1 == arr2);
