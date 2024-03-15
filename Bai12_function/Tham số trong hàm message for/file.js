/*
Tham số trong hàm 
1. Tham số
    - Định nghĩa
    - Kiểu dữ liệu
    - Tính private
    - 1 tham số
    - Nhiều tham số
2. Truyền tham số
    -1 tham số 
    -Nhiều tham số

3. Argument?
    - Đối tượng argument
    - Giới thiệu vòng for
*/

function wirteLog() {
    // console.log(message);

    var myString = '';
    for (var param of arguments) {
        myString += '${param} - '
    }
    console.log(myString)
}

wirteLog('log1', 'log2', 'log3');
// // Có thể truyền nhiều cách 
// wirteLog(123);
// wirteLog('Chao anh ');
// wirteLog(['chao'], ['chahhhhh']);