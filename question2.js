new Vue({
    el: '.question',
    data: {
        form: "",
        answers: [],
        count: 0,

        questionIndex: 0,

        questions: [
            {
                question: '背景を英語でなんと言うでしょうか。',
                answer: 'background'
            },
            {
                question: 'cheerを和訳するとなんと言うでしょうか。',
                answer: '椅子'
            },
            {
                question: 'cssを略さずにいうとなんと言うでしょうか',
                answer: 'Cascading Style Sheets'
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },
            {
                question: '',
                answer: ''
            },

        ]
    },

    computed: {
        currentQuestion: function () {
            return this.questions[this.questionIndex];
        }
    },

    methods: {
        addAnswer: function () {
            this.answers.push(this.form);
            if (this.questions.length == this.answers.length) {
                var correctCount = 0;
                for (var i in this.answers) {
                    var answer = this.answers[i];
                    if (answer == this.questions[i].answer) {
                        correctCount++;
                    }
                }
                this.count = correctCount + '問正解です！'
            } else {
                this.questionIndex++;
            }
        }
    }
})