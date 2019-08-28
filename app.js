//correct answers = A, B, A, B, A
const correctAnswers = ["A", "B", "A", "B", "A"];
let img = document.createElement("img");
img.className = "img-fluid img-thumbnail";
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });



    //Show result
    scrollTo(0,0)
    const result = document.querySelector('.result');
    result.classList.remove('d-none');


    function getImage(score){

            switch(score){
                case 0:
                img.src = "https://media.giphy.com/media/oWQixIs5FcHIs/giphy.gif";
                result.appendChild(img);
                break;
                case 20:
                img.src = "https://media.giphy.com/media/XrBiWQU23trHy/giphy.gif";
                result.appendChild(img);
                break;
                case 40:
                img.src = "https://media.giphy.com/media/FpuWitmVjjSE/giphy.gif";
                result.appendChild(img);
                break;
                case 60:      
                img.src = "https://media.giphy.com/media/Ed2NXBuw8uhlm/giphy.gif";
                result.appendChild(img);
                break;
                case 80:
                img.src = "https://media.giphy.com/media/iofbYa67AbBg4/giphy.gif";
                result.appendChild(img);
                break;
                case 100: 
                img.src = "https://media.giphy.com/media/6vWVzDv19i3MQ/giphy.gif";
                result.appendChild(img);
                break;
        }

    }



    let output = 0;
    let timer = setInterval(() =>{
        const textResult = result.querySelector('span');
        textResult.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
            getImage(score);
        }else{
            output++;
        }
    }, 10)
});

