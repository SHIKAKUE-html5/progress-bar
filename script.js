
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=> {
    const status = document.querySelector(".status");
    const active = document.querySelector(".active");
    const input = document.querySelector(".input");
    const statusInput = document.querySelector(".status-input");
    const statusInputValue = statusInput.value;
    const inputValue = input.value;
    const title = document.querySelector(".title")
    if ((statusInputValue * 100 / inputValue) > 100 ) {
        alert("実際解いた問数は必ず目標問数より小さい！！")
    } else if (!isNaN(inputValue) && !isNaN(statusInputValue)) {
        title.textContent = "今日のあなたの目標は" + inputValue + "問";
        status.textContent = statusInputValue + "問" 
        active.style.width = statusInputValue * 100 / inputValue + "%"
    }else {
        alert("数値だけに入力してください！")
    }
    
    
})