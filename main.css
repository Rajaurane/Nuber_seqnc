document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option-btn');
    const feedback = document.querySelector('.feedback-area');
    let timerActive = true;

    // Timer Functionality
    setTimeout(() => {
        if (timerActive) {
            showFeedback("⏰ Time's up! The correct answer is 48", 'timeout');
            disableOptions();
        }
    }, 20000);

    // Answer Handling
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            if (!timerActive) return;
            timerActive = false;
            
            const isCorrect = e.target.classList.contains('correct');
            const resultType = isCorrect ? 'correct' : 'incorrect';
            const message = isCorrect 
                ? "🎉 Correct! You're a math wizard!" 
                : `😞 Incorrect! The answer is 48 (35 +13)`;

            e.target.classList.add(resultType);
            showFeedback(message, resultType);
            disableOptions();
        });
    });

    function showFeedback(text, type) {
        feedback.textContent = text;
        feedback.className = `feedback-area show ${type}`;
    }

    function disableOptions() {
        options.forEach(btn => {
            btn.classList.add('disabled');
            if (btn.classList.contains('correct')) {
                btn.classList.add('correct');
            }
        });
    }
});