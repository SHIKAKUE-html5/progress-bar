
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=> {
    const status = document.querySelector(".status");
    const active = document.querySelector(".active");
    const input = document.querySelector(".input");
    const statusInput = document.querySelector(".status-input");
    const statusInputValue = statusInput.value;
    const inputValue = input.value;
    const title = document.querySelector(".title")

    if (!isNaN(inputValue) && !isNaN(statusInputValue)) {
        title.textContent = "今日のあなたの目標は" + inputValue + "問";
        status.textContent = statusInputValue + "問" 
        active.style.width = statusInputValue * 100 / inputValue + "%"
    }else {
        alert("数値だけに入力してください！")
    }
    
})