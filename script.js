let questions = document.querySelectorAll(".qna .list");
// console.log(question);

questions.forEach((q) => {
    q.addEventListener("click", (e) => {
        const answerElement = q.querySelector(".answer");
        answerElement.classList.toggle("display-none");
        const iconElement = q.querySelector(".question .icon");
        if(iconElement.textContent==='-'){
            iconElement.textContent='+';
        }else{
            iconElement.textContent='-';
        }
    });
});

let left_items = document.querySelectorAll(".list .item");
// console.log(question);

left_items.forEach((q) => {
    q.addEventListener("click", (e) => {
        const answerElement = q.querySelectorAll(".sub-topic");
        answerElement.forEach((subTopic)=>{
            subTopic.classList.toggle("display-none");
        })
    });
});