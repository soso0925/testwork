new Vue({
    el: '.question',
    data: {
        form: "",
        answers: [],
        count: 0,

        questionIndex: 0,

        questions: [
            {
                question: 'webの原型となったシステムは何でしょうか。英語7文字(すべて大文字)でお答えください。',
                answer: 'ENQUIRE'
            },

            {
                question: 'cssを略さずにいうとなんと言うでしょうか。英語(すべて小文字)でお答えください。',
                answer: 'cascading style sheets'
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
                question: '第',
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