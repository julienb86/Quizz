//correct answers = A, B, A, B, A
const correctAnswers = ["A", "B", "A", "B", "A"];

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
    

    let output = 0;
    let timer = setInterval(() =>{
        const textResult = result.querySelector('span');
        textResult.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10)
});

