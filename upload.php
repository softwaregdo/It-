<?php
if ($_FILES["file"]) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo "تم تحميل الملف بنجاح.";
    } else {
        echo "حدث خطأ أثناء تحميل الملف.";
    }
}
?>