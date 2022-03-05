// Mảng lưu lại dữ liệu, mỗi phần tử là một object mô tả 1 item
// itemList là mảng -> itemList[0] là một item object -> itemList[1].productName

let itemList = [
  {
    imgFileName: "d1.jpg",
    productName: "Mắt kính d1",
    type: "d1",
  },
  {
    imgFileName: "d2.jpg",
    productName: "Mắt kính s10",
    type: "d2"
  },
  {
    imgFileName: "d3.jpg",
    productName: "Mắt kính d3",
    type: "d3"
  },
  {
    imgFileName: "d1.jpg",
    productName: "Mắt kính d1",
    type: "d1"
  },
  {
    imgFileName: "d2.jpg",
    productName: "Mắt kính d2",
    type: "d2"
  },
  {
    imgFileName: "d1.jpg",
    productName: "Mắt kính d1",
    type: "d1"
  },
  {
    imgFileName: "d3.jpg",
    productName: "Mắt kính d3",
    type: "d3"
  },
  {
    imgFileName: "d1.jpg",
    productName: "Mắt kính d1",
    type: "d1"
  },
];


/**
 * <div class="item">
            <img src="images/d1.jpg" alt="">
            <h1>Mắt kính d1</h1>
        </div>
 */

// Hàm tạo ra một element "item"
// item: object của một sản phẩm (gồm imgFileName và productName)
function createItem(item) {
  let div = document.createElement("div");
  div.className = "item";

  let img = document.createElement("img");
  img.src = "images/" + item.imgFileName;
  img.alt = item.productName;

  let h1 = document.createElement("h1");
  let text = document.createTextNode(item.productName);
  h1.appendChild(text);

  div.appendChild(img);
  div.appendChild(h1);

  let list = document.getElementById("list");
  list.appendChild(div);

  // console.log(img);
}

function addList(itemList) {
  // Duyệt từng phần tử trong mảng itemList. Với mỗi phần tử, tạo ra div cho phần tử đó bằng cách gọi hàm createItem(?)
  let length = itemList.length
  for (let i = 0; i < length; i++) {
    createItem(itemList[i])
  }
}

function filter(key) {
  let k = [];
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].type == key) {
      k.push(itemList[i]);
    }
  }
  return k;
}

// let res = filter("d2");
// console.log(res);

addList(itemList);
let btn = document.getElementById("btn-filter");
btn.addEventListener("click", function(){
  let box = document.getElementsByClassName('item')
  for (let i = 0; i < itemList.length; i++) {
    box[i].style.display = 'none'
  }

  let arr = [];
  let type = document.getElementsByTagName("input");
  for (let i = 0; i < type.length; i++) {
    if (type[i].checked) {
      arr.push(type[i].name)
    }
    console.log(arr)
  }
  for (let i = 0; i < arr.length; i++) {
    addList(filter(arr[i]))
  }
});

// let p = document.createElement("p");
// let text = document.createTextNode("Hôm nay là ngày giãn cách đầu tiên. Mọi người giữ gìn sức khỏe nhé.");
// p.appendChild(text);
// let div = document.getElementById("list");
// div.appendChild(p);
// document.body.appendChild(p);
// console.log(div);