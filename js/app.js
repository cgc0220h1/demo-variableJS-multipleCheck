function numTest() {
    let a = prompt('Nhập vào số thứ 1');
    let b = prompt("Nhập vào số thứ 2");
    let c = a%b;
    if (c==0) {
        alert("số 1 chia hết cho số 2");
    }else{
        alert("số 1 không chia hết cho số 2");
    }
}