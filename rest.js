//slide 7
//get nhiều đối tượng (mảng)
var url = "https://fakestoreapi.com/products";
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function() {
    var products = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(products);
    } else {
        console.error(products);
    }
}
xhr.send(null);
//slide 8
var xhr2 = new XMLHttpRequest()
xhr2.open('GET', url + "/1", true)
xhr2.onload = function() {
    var products = JSON.parse(xhr2.responseText);
    if (xhr2.readyState == 4 && xhr2.status == "200") {
        console.table(products);
    } else {
        console.error(products);
    }
}
xhr2.send(null);

//slide 9
// Thêm đối tượng
var data = {
    category: "men's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { count: 120, rate: 3.9 },
    title: "Black blazer "
};

var json = JSON.stringify(data);
var xhr3 = new XMLHttpRequest();
xhr3.open("POST", url, true);
xhr3.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr3.onload = function() {
    var products = JSON.parse(xhr3.responseText);
    if (xhr3.readyState == 4 && xhr3.status == "200") {
        console.table(products);
    } else {
        console.error(products);
    }
}
xhr3.send(json)

//slide 10
// Cập nhật đối tượng
var data = {};
data.title = "Black blazer with a shirt";
var json = JSON.stringify(data);

var xhr4 = new XMLHttpRequest();
xhr4.open("PUT", url + '/21', true);
xhr4.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr4.onload = function() {
    var products = JSON.parse(xhr4.responseText);
    if (xhr4.readyState == 4 && xhr4.status == "200") {
        console.table(products);
    } else {
        console.error(products);
    }
}
xhr4.send(json);

//slide 11
// Xóa đối tượng
// Delete a user
var xhr5 = new XMLHttpRequest();
xhr5.open("DELETE", url + '/2', true);
xhr5.onload = function() {
    var users = JSON.parse(xhr5.responseText);
    if (xhr5.readyState == 4 && xhr5.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr5.send(null);