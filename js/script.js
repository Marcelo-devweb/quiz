const quizData = [
    {
        question: "Em que ano o JavaScript foi criado?",
        a: "1998",
        b: "1995",
        c: "2000",
        d: "1993",
        correct: "b",
    },
    {
        question: "Em que ano a linguagem C foi criada?",
        a: "1970",
        b: "1980",
        c: "1978",
        d: "1972",
        correct: "d",
    },
    {
        question: "Em que ano o Python foi criado?",
        a: "1990",
        b: "1999",
        c: "1995",
        d: "1991",
        correct: "d",
    },
    {
        question: "Em que ano o C# foi criado?",
        a: "2000",
        b: "2002",
        c: "2008",
        d: "2010",
        correct: "a",
    },
    {
        question: "Em que ano o PHP foi criado?",
        a: "1995",
        b: "2003",
        c: "1998",
        d: "2001",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você respondeu ${score}/${quizData.length} perguntas corretamente</h2>
                <button onclick="location.reload()">Jogar Novamente</button>
            `
        }
    }
})