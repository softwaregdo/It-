function uploadFile() {
    var input = document.getElementById('fileInput');
    if (input.files.length > 0) {
        var fileList = document.getElementById('fileList');
        var file = input.files[0];
        var listItem = document.createElement('div');
        listItem.textContent = 'تم تحميل الملف: ' + file.name;
        fileList.appendChild(listItem);
    }
}

function scrollToMenu(menuNumber) {
    var element = document.getElementById('menu' + menuNumber);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle the visibility of the quick access menu
document.getElementById('quick-access-btn').onclick = function() {
    var menu = document.getElementById('quick-access-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
};

// إضافة رسالة ترحيبية عند الدخول للصفحة
/*window.onload = function() {
    alert('مرحبا بك في موقع تحميل المحاضرات');
};*/

// وظيفة لتفعيل الوضع الليلي
function toggleNightMode() {
    var body = document.body;
    body.classList.toggle('night-mode');
}

// إضافة وظيفة زر للتعليقات
/*function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentList = document.getElementById('commentList');
    if (commentInput.value.trim() !== "") {
        var commentItem = document.createElement('div');
        commentItem.textContent = commentInput.value;
        commentList.appendChild(commentItem);
        commentInput.value = ""; // تفريغ الحقل بعد إضافة التعليق
    }
}*/

// وظيفة إرسال بريد إلكتروني
function sendEmail() {
    window.location.href = 'mailto:software54269@gmail.com';
}