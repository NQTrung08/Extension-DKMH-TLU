// popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị popup khi được gọi
    function showPopup() {
      document.getElementById('extension-popup').style.display = 'flex';
    }
  
    // Gán sự kiện click cho nút đóng
    document.getElementById('close-popup').addEventListener('click', function() {
      document.getElementById('extension-popup').style.display = 'none';
    });
  
    // Gọi hàm hiển thị popup khi extension được nhấp
    showPopup();
  });
  