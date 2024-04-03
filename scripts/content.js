// context.js
window.onload = function () {
  // Tạo container cho cả hai cột
  var container = document.createElement("div");
  container.classList.add("container");

  // Tạo một hàng (row) chứa các cột
  var row = document.createElement("div");
  row.classList.add("row");

  // Tạo cột chiếm 4 phần
  var col1 = document.createElement("div");
  col1.classList.add("col-4");
  col1.innerHTML = "<h3>Cột 1</h3>";

  // Tạo cột chiếm 8 phần
  var col2 = document.createElement("div");
  col2.classList.add("col-8");
  col2.innerHTML = "<h3>Cột 2</h3>";

  // Thêm cột vào hàng
  row.appendChild(col1);
  row.appendChild(col2);

  // Thêm hàng vào container
  container.appendChild(row);

  // Thêm container vào body của trang web
  document.body.appendChild(container);
};
