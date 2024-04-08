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
	col1.innerHTML = "<h3>Cột 1</h3><button>Đăng ký học</button>";

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

	// Mảng courses
	var courses = [
    { id: "MA101", name: "Giai tich 1", tinChi: 3 },
    { id: "CT101", name: "Khóa học 2", tinChi: 4 },
    { id: "BA302", name: "Khóa học 3", tinChi: 2 },
  ];

  var classes = [
    {
      id: "GT1.1",
      name: "Giai tich 1.1",
      ca: "3-5",
      thu: "5",
      idCouse: "MA101",
    },
		{
      id: "GT1.1.2",
      name: "Giai tich 1.1",
      ca: "8-10",
      thu: "7",
      idCouse: "MA101",
    },
		{
      id: "GT1.1.3",
      name: "Giai tich 1.1",
      ca: "2-5",
      thu: "3",
      idCouse: "MA101",
    },
    {
      id: "GT1.2",
      name: "Giai tich 1.2",
      ca: "3-8",
      thu: "2",
      idCouse: "CT101",
    },
    {
      id: "GT1.3",
      name: "Giai tich 1.3",
      ca: "6-7",
      thu: "4",
      idCouse: "BA302",
    },
  ];

	var checkboxes = []; // Mảng lưu trữ các checkbox
	var prevCourseElement = null; // Tham chiếu đến môn học được chọn trước đó

	var prevCheckedClassList = null;

	// Hiển thị mảng courses trong col-8
	var col2Content = document.createElement("div");
	col2Content.innerHTML = "<h3>Danh sách khóa học</h3>";

	var ul = document.createElement("ul");
	courses.forEach(function (course) {
		var li = document.createElement("li");
		li.className = "course--item";
		li.addEventListener("click", function () {
			if (prevCourseElement !== null) {
				prevCourseElement.style.color = ""; // Loại bỏ màu đỏ của môn học trước đó
			}
			li.style.color = "red"; // Đổi màu chữ của môn học được chọn thành đỏ
			prevCourseElement = li; // Lưu trữ tham chiếu đến môn học được chọn
			handleCourse(course.id);
		});
		li.textContent = `${course.name}, Số tín chỉ: ${course.tinChi}`;
		ul.appendChild(li);
	});

	col2Content.appendChild(ul);
	col2.appendChild(col2Content);

	var divClass = document.createElement("div");
	divClass.innerHTML = "<h3>Danh sách lớp học</h3>";

	function handleCourse(courseId) {
		var ul = document.createElement("ul");
		
		classes.forEach(function (itemClass) {
			var li = document.createElement("li");
			li.className = "class--item";
			if (itemClass.idCouse === courseId) {
				var checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.value = itemClass.id;
				checkbox.addEventListener("change", function (event) {
	
					// Loại bỏ chọn tất cả các checkbox khác
					checkboxes.forEach(function (cb) {
						if (cb !== checkbox) {
							cb.checked = false;
						}
					});

					console.log("ID của khóa học trước khi được chọn mới:", prevCheckedClassList);
					if (event.target.checked) {
						prevCheckedClassList = event.target.value;
						
					} else {
						prevCheckedClassList = null;
					}
					console.log(prevCheckedClassList);
				});


				checkboxes.push(checkbox);

				li.textContent = `Tên lớp: ${itemClass.name}, Mã lớp: ${itemClass.id}, Mã môn: ${itemClass.idCouse}`;
				li.prepend(checkbox);
				
			}
			ul.appendChild(li);

		});
		divClass.innerHTML = '<h3>Danh sách lớp học</h3>';
		divClass.appendChild(ul);
	}
	
	console.log(checkboxes);
	col2Content.appendChild(divClass);
};
