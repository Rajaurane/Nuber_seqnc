:root {
    --primary: #4a90e2;
    --correct: #7ed321;
    --wrong: #ff4b4b;
    --timer: #f5a623;
}

body {
    font-family: 'Arial', sans-serif;
    background: #f5f7fa;
    min-height: 100vh;
    display: grid;
    place-items: center;
    margin: 0;
    padding: 20px;
}

.quiz-frame {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 600px;
    overflow: hidden;
}

.timer {
    height: 5px;
    background: var(--timer);
    animation: timer 20s linear forwards;
}

@keyframes timer {
    from { width: 100%; }
    to { width: 0; }
}

.quiz-body {
    padding: 30px;
}

h1 {
    color: #2d3436;
    text-align: center;
    margin: 0 0 30px 0;
    font-size: 1.8em;
}

.question-box {
    background: rgba(74, 144, 226, 0.05);
    border-radius: 15px;
    padding: 25px;
}

.sequence {
    font-size: 1.6em;
    text-align: center;
    margin: 0 0 25px 0;
    color: #2d3436;
    font-weight: 600;
}

.options-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 25px 0;
}

.quiz-btn {
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    background: white;
    color: #2d3436;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.quiz-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.result-box {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-weight: 600;
    display: none;
    margin-top: 20px;
}

/* Social Panel */
.social-panel {
    display: flex;
    gap: 15px;
    padding: 20px;
    justify-content: center;
    background: #f8f9fa;
    border-top: 1px solid #eee;
}

.social-link {
    padding: 12px 25px;
    border-radius: 8px;
    text-decoration: none;
    color: white !important;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.2s ease;
}

.social-link:hover {
    transform: translateY(-2px);
}

.web { background: #4a90e2; }
.yt { background: #ff0000; }

/* Answer States */
[data-answer="correct"].selected {
    background: var(--correct) !important;
    color: white !important;
}

[data-answer="wrong"].selected {
    background: var(--wrong) !important;
    color: white !important;
}

.show-result {
    display: block !important;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}