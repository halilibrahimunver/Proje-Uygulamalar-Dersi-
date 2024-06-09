function submitSurvey() {
    var form = document.getElementById('surveyForm');
    var answers = form.getElementsByTagName('input');
    var score = 0;
    var totalQuestions = 10; // Toplam soru sayısı
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].type === 'radio' && answers[i].checked && answers[i].value === 'yes') {
            score++;
        }
    }
    if (score / totalQuestions >= 0.7) {
        window.location.href = 'http://127.0.0.1:5000/sayi';
    } else {
        window.location.href = 'http://127.0.0.1:5000/toplama';
    }
}
