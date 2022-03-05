let a = [3, 4, 6, 1, 7];

function inMang() {
    console.log(a);
}

function xoaCuoi() {
    a.pop();
}

function themCuoi() {
    let x = Number(prompt("Hãy nhập số muốn thêm: "));
    a.push(x);
}

function catMang() {
    let x = Number(prompt("Vị trí bạn muốn cắt:"));
    let y = Number(prompt("Số lượng phần tử:"));
    let b = a.slice(x,x+y);
    console.log(b)
}