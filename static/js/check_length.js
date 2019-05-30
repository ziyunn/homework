function chk_length(text, max_length) {

    var str = text.value;
    
    //저장 버튼
    var f_submit = document.getElementById('submit');
    f_submit.disabled = true;

    if (str !== "") {
        f_submit.disabled = false;
    }
    var str_len = str.length;
    var max_len = max_length;
    var str2 = "";

    if (str_len > max_len) {
        alert(max_len + "글자를 초과하여 입력할 수 업습니다.");
        str2 = str.substr(0, max_len);
        text.value = str2;
    }
    text.focus();
    document.getElementById('count').value = max_len - str_len;
}