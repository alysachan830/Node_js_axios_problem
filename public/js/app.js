
// ----------------- npm下載axios後及使用axios時，在此檔案會自動出現以下程式碼 -----------------
// const { default: axios } = require("axios");
// 但會報錯：Uncaught ReferenceError: require is not defined


// ----------------- 自己嘗試載入axios的寫法 -----------------
// import axios from "../../node_modules/axios";

// 但console會出現：Cannot use import statement outside a module
// 而且並沒有向searchAJAX發出POST請求
// 反而是向searchList發出POST請求

const send = document.getElementById('send');
const content = document.getElementById('content');

send.addEventListener('click', e => {
    e.preventDefault(); //prevent default submit action
    let str = content.value;
    let data = `content=${str}`
    
    // 假設有成功載入axios套件，請問我以下的寫法正確嗎？
    axios({
        method: 'post',
        url: '/searchAJAX',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    })
        .then(res => console.log(res))


    // 平時傳資料時，都是一個物件，裏面有key和對應的value，
    // 因為現在格式是application/x-www-form-urlencoded，所以不能用物件寫法
    // 需要用以下寫法(key=value) ： 
    // content=1234&title=hello
})