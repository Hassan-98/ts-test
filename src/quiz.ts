//= Types & Interfaces
type Answer = {
  id: number;
  ans: string;
}

interface Question {
  id: number;
  qusetion: string;
  answers: Answer[];
  correctAnswer: number;
}

interface IQuiz {
  quizTime: number;
  originalTime: number;
  score: number;
  questions: Question[];
  currentQuestion: Question;
  currentQuestionIndex: number;
  timer: number | null;

  startTimer: () => void;
  stopTimer: () => void;
  renderTimer: () => void;
  turnNextQuestion: () => void;
  checkAnswer: (id: number) => void;
  renderQuestion: () => void;
  renderScore: () => void;
  showResult: () => void;
  restartQuiz: () => void;
}

//= Questions Database
const questionsDatabase: Question[] = [
  {
    id: 1,
    qusetion: "ما هو أكبر حيوان في العالم؟",
    answers: [{id: 1, ans: "الفيل"}, {id: 2, ans: "الزرافة"}, {id: 3, ans: "الحوت الأزرق"}, {id: 4, ans: "القرش"}],
    correctAnswer: 3
  },
  {
    id: 2,
    qusetion: "ماهو اطول برج في العالم ؟",
    answers: [{id: 1, ans: "برج إيفل"}, {id: 2, ans: "برج خليفة"}, {id: 3, ans: "برج الساعة"}, {id: 4, ans: "برج لندن"}],
    correctAnswer: 2
  },
  {
    id: 3,
    qusetion: "إلى ماذا تتحول اليرقة؟",
    answers: [{id: 1, ans: "فراشة"}, {id: 2, ans: "ذبابة"}, {id: 3, ans: "نملة"}, {id: 4, ans: "نحلة"}],
    correctAnswer: 1
  },
  {
    id: 4,
    qusetion: "ما هي الكارثة الطبيعية التي يتم قياسها بمقياس ريختر؟",
    answers: [{id: 1, ans: "الزلزال"}, {id: 2, ans: "البركان"}, {id: 3, ans: "الاعصار"}, {id: 4, ans: "التسونامي"}],
    correctAnswer: 1
  },
  {
    id: 5,
    qusetion: "ما هو أسرع حيوان بري في العالم؟",
    answers: [{id: 1, ans: "الاسد"}, {id: 2, ans: "الضبع"}, {id: 3, ans: "الكلب البري"}, {id: 4, ans: "الفهد"}],
    correctAnswer: 4
  },
  {
    id: 6,
    qusetion: "ما هو الكوكب الأكثر خطورة؟",
    answers: [{id: 1, ans: "المريخ"}, {id: 2, ans: "زحل"}, {id: 3, ans: "المشتري"}, {id: 4, ans: "عطارد"}],
    correctAnswer: 3
  },
  {
    id: 7,
    qusetion: "ما هو الطائر الأسرع في العالم؟",
    answers: [{id: 1, ans: "النسر"}, {id: 2, ans: "النعامة"}, {id: 3, ans: "الصقر"}, {id: 4, ans: "الغراب"}],
    correctAnswer: 2
  },
  {
    id: 8,
    qusetion: "كم عدد القلوب التي يمتلكها حيوان الاخطبوط؟",
    answers: [{id: 1, ans: "اربعة"}, {id: 2, ans: "ثلاثة"}, {id: 3, ans: "اثنين"}, {id: 4, ans: "واحد فقط"}],
    correctAnswer: 2
  },
  {
    id: 9,
    qusetion: "ما عدد أجنحة النحلة؟",
    answers: [{id: 1, ans: "ثلاثة ازواج"}, {id: 2, ans: "زوج واحد"}, {id: 3, ans: "اربعة ازاوج"}, {id: 4, ans: "زوجين"}],
    correctAnswer: 4
  },
  {
    id: 10,
    qusetion: "إلى أي نوع من الحيوانات تنتمي الدلافين؟",
    answers: [{id: 1, ans: "الثدييات"}, {id: 2, ans: "البرمائيات"}, {id: 3, ans: "الفلقيات"}, {id: 4, ans: "الزواحف"}],
    correctAnswer: 1
  },
  {
    id: 11,
    qusetion: "أي حيوان يمكن رؤيته على شعار سيارة بورش؟",
    answers: [{id: 1, ans: "الاسد"}, {id: 2, ans: "القنفذ"}, {id: 3, ans: "الحصان"}, {id: 4, ans: "الفهد"}],
    correctAnswer: 3
  },
  {
    id: 12,
    qusetion: "ما هو الحيوان الذي لا يصدر أي صوت؟",
    answers: [{id: 1, ans: "الفيل"}, {id: 2, ans: "الحوت"}, {id: 3, ans: "الحصان"}, {id: 4, ans: "الزرافة"}],
    correctAnswer: 4
  },
  {
    id: 13,
    qusetion: "أقدم مدينة معروفة في العالم هي؟",
    answers: [{id: 1, ans: "القاهرة"}, {id: 2, ans: "دمشق"}, {id: 3, ans: "بعلبك"}, {id: 4, ans: "لندن"}],
    correctAnswer: 2
  },
  {
    id: 14,
    qusetion: "من هو الملك الذي قام بتأسيس المملكة العربية السعودية؟",
    answers: [{id: 1, ans: "فهد بن عبد العزيز"}, {id: 2, ans: "عبدالعزيز بن سعود"}, {id: 3, ans: "سلمان بن عبدالعزيز"}, {id: 4, ans: "عزيز بن سعود"}],
    correctAnswer: 2
  },
  {
    id: 15,
    qusetion: "كم عدد العظام لدى الإنسان البالغ؟",
    answers: [{id: 1, ans: "207"}, {id: 2, ans: "208"}, {id: 3, ans: "206"}, {id: 4, ans: "205"}],
    correctAnswer: 3
  },
  {
    id: 16,
    qusetion: "اسم أكبر جزيرة في العالم",
    answers: [{id: 1, ans: "سريلانكا"}, {id: 2, ans: "ايسلندا"}, {id: 3, ans: "الهند"}, {id: 4, ans: "جرينلاند"}],
    correctAnswer: 4
  },
  {
    id: 17,
    qusetion: "ما هو البحر الذي يفصل بين دولتي تركيا واليونان؟",
    answers: [{id: 1, ans: "بحر إيجة"}, {id: 2, ans: "البحر الميت"}, {id: 3, ans: "البحر الاحمر"}, {id: 4, ans: " البحر الاسود"}],
    correctAnswer: 1
  },
  {
    id: 18,
    qusetion: "ما هو أطول نهر في العالم؟",
    answers: [{id: 1, ans: "الامازون"}, {id: 2, ans: "النيل"}, {id: 3, ans: "الفرات"}, {id: 4, ans: "المسيسيبي"}],
    correctAnswer: 1
  },
  {
    id: 19,
    qusetion: "ما هو قطر الأرض؟",
    answers: [{id: 1, ans: "7000 ميل"}, {id: 2, ans: "6000 ميل"}, {id: 3, ans: "8000 ميل"}, {id: 4, ans: "12000 ميل"}],
    correctAnswer: 3
  },
  {
    id: 20,
    qusetion: "ما هي أكبر بحيرة في العالم؟",
    answers: [{id: 1, ans: "ناصر"}, {id: 2, ans: "فيكتوريا"}, {id: 3, ans: "مازولا"}, {id: 4, ans: "قزوين"}],
    correctAnswer: 4
  },
  {
    id: 21,
    qusetion: "في أي بلد تقع براغ؟",
    answers: [{id: 1, ans: "البوسنة"}, {id: 2, ans: "رومانيا"}, {id: 3, ans: "روسيا"}, {id: 4, ans: "التشيك"}],
    correctAnswer: 4
  }
]

//= Elements Referances
const startQuizButton = document.getElementById('start-quiz')! as HTMLButtonElement;

const timerElement = document.querySelector('.timer span')! as HTMLSpanElement;
const scoreElement = document.querySelector('.score span')! as HTMLSpanElement;

const questionElement = document.querySelector('.quiz-question')! as HTMLDivElement;
const answersContainerElement = document.querySelector('.answers')! as HTMLDivElement;

const resultPopupElement = document.querySelector('.answer-popup')! as HTMLDivElement;
const resultScoreElement = resultPopupElement.querySelector('b')!;
const restartButton = resultPopupElement.querySelector('button')! as HTMLButtonElement;


//= Quiz Class & Functionality
class Quiz implements IQuiz {
  quizTime: number = 60;
  originalTime: number = 0; 
  score: number = 0;
  questions: Question[] = questionsDatabase.sort(() => 0.5 - Math.random());
  currentQuestionIndex: number = 0;
  timer: number | null = null; 

  constructor(time: number = 60) {
    this.quizTime = time;
    this.originalTime = time;
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.quizTime <= 0) {
        this.showResult();
        this.stopTimer();
        return;
      }

      this.quizTime -= 1;
      this.renderTimer();
    }, 1000);
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  renderTimer() {
    timerElement.textContent = this.quizTime.toString();
  }

  turnNextQuestion() {
    this.currentQuestionIndex += 1;
  }

  checkAnswer(id: number) {
    const quesiton = this.currentQuestion;

    this.turnNextQuestion();

    if (quesiton.correctAnswer === id) this.score += 10;
  }

  renderQuestion() {
    questionElement.textContent = this.currentQuestion.qusetion;
  
    Object.keys(answersContainerElement.children).forEach((_, i) => {
      let element = answersContainerElement.children[i];
      let answer = this.currentQuestion.answers[i];
  
      element.textContent = answer.ans;
      element.id = answer.id.toString();
    });
  }
  
  renderScore() {
    scoreElement.textContent = this.score.toString();
  }

  showResult() {
    resultScoreElement.textContent = this.score.toString();
    resultPopupElement.classList.add('show');
  }

  restartQuiz() {
    this.quizTime = this.originalTime;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.questions = questionsDatabase.sort(() => 0.5 - Math.random());

    this.startTimer();
    this.renderScore();
    this.renderQuestion();

    resultPopupElement.classList.remove('show');
  }
}


/******************** DOM Logics ********************/

// Init Quiz
let quiz = new Quiz(30);

//= Start Quiz
startQuizButton.onclick = () => {
  startQuizButton.setAttribute('disabled', 'disabled');
  quiz.renderQuestion();
  quiz.startTimer();
}

//= Answer A Question
answersContainerElement.querySelectorAll('.answer').forEach(answerEl => {
  
  answerEl.addEventListener('click', (event) => {
    let id = (<HTMLDivElement>event.target).id;

    if (!id) return;

    quiz.checkAnswer(+id);

    quiz.renderScore();

    if (quiz.currentQuestionIndex <= quiz.questions.length - 1) {
      quiz.renderQuestion();
    } else {
      quiz.stopTimer();
      quiz.showResult();
    }
  });
});

//= Restart Quiz
restartButton.addEventListener('click', () => {
  quiz.restartQuiz();
});