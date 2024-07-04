const questionsAndAnswers = [
    { question: "What is direct democracy?", answer: "All citizens express their opinions themselves." },
    { question: "What is one advantage of direct democracy?", answer: "Gives equal weight to all votes." },
    { question: "How does direct democracy encourage political involvement?", answer: "It encourages participation in politics." },
    { question: "How does direct democracy handle the need for representatives?", answer: "It removes the need for trusted representatives." },
    { question: "What type of debate does direct democracy encourage?", answer: "It encourages genuine debate." },
    { question: "Why is direct democracy considered impractical?", answer: "Because of the size of constituencies and logistical challenges." },
    { question: "Why might people feel unqualified to participate in direct democracy?", answer: "They may not want to or feel qualified to make decisions." },
    { question: "How can direct democracy be manipulated?", answer: "It can be manipulated by the best speakers." },
    { question: "What emotional impact does direct democracy have?", answer: "It can be emotional." },
    { question: "What happens to minority viewpoints in direct democracy?", answer: "Minority viewpoints are often ignored." },
    { question: "What is representative democracy?", answer: "People elect representatives who make decisions on their behalf." },
    { question: "What is an advantage of representative democracy in terms of practicality?", answer: "It is practical as issues are usually complex or need rapid response." },
    { question: "How do parties and pressure groups contribute to representative democracy?", answer: "They give people various choices of representation." },
    { question: "How does representative democracy avoid tyranny of the majority?", answer: "It avoids tyranny of the majority by providing checks and balances." },
    { question: "How often do elections occur in representative democracy?", answer: "Frequent elections allow accountability." },
    { question: "Why are politicians in representative democracy better informed?", answer: "Politicians are better informed on issues due to their expertise and resources." },
    { question: "What is a disadvantage of representative democracy regarding participation?", answer: "It may lead to reduced participation." },
    { question: "How are parties and pressure groups in representative democracy often perceived?", answer: "They are often run by elites pursuing their own agenda." },
    { question: "How do politicians in representative democracy tend to behave?", answer: "Politicians are likely to follow views of the majority." },
    { question: "Why is accountability low in representative democracy?", answer: "General elections are five years apart." },
    { question: "What is a risk associated with politicians in representative democracy?", answer: "Politicians may be corrupt or not keep their promises." },
    { question: "What is a positive feature of the UK democratic system related to local governance?", answer: "Devolved governments allow more decisions to be taken closer to the local people." },
    { question: "How are elections in the UK democratic system characterized?", answer: "Elections are free and fair." },
    { question: "What role does the judiciary play in the UK democratic system?", answer: "An independent judiciary protects freedoms." },
    { question: "What is the significance of a free media in the UK democratic system?", answer: "A free media can criticize and challenge the government." },
    { question: "What choices do people have in the UK democratic system?", answer: "A wide range of parties and pressure groups are available." },
    { question: "What is a negative feature of the UK democratic system related to minority viewpoints?", answer: "Under-representation of minority viewpoints due to FPTP." },
    { question: "What is a criticism of the House of Lords in the UK?", answer: "The House of Lords lacks democratic legitimacy." },
    { question: "How are citizens' rights viewed in the UK democratic system?", answer: "There is a lack of protection for citizens' rights." },
    { question: "What is an issue with media control in the UK?", answer: "Control of sections of the media by wealthy, unaccountable business interests." },
    { question: "What has been the trend in voter turnout in the UK?", answer: "Falling turnout is important as it means governments are elected on a reduced share of the popular vote." },
    { question: "What was the average turnout at General Elections from 1945 to 1997?", answer: "The average turnout was 76%." },
    { question: "How has voter turnout changed since 1997?", answer: "It has been lower than 70% every time since 1997." },
    { question: "What was notable about voter turnout in the 2001 General Election?", answer: "Turnout was only 59%." },
    { question: "How do second order elections compare in terms of turnout?", answer: "Turnout is even lower, e.g., local council elections in 2016 had only 33% turnout." },
    { question: "What has been the trend in party membership in the UK?", answer: "Party membership has declined, with only 1.6% of the electorate now belonging to one of the main three parties." },
    { question: "How did Conservative Party membership change from the 1990s to 2016?", answer: "It fell from 400,000 to 150,000." },
    { question: "How did Labour Party membership change after Jeremy Corbyn became leader?", answer: "It increased to 515,000 in 2016." },
    { question: "How did Liberal Democrat membership change under the coalition government?", answer: "It fell to 49,000 but rose to 82,000 by 2017." },
    { question: "What trend has been observed in membership of smaller parties?", answer: "There has been an increase in membership to smaller parties." },
    { question: "How did SNP membership change from 2013 to 2016?", answer: "It increased from 25,000 to 120,000 members." },
    { question: "What has been the trend in pressure group membership?", answer: "Membership of pressure groups has been increasing." },
    { question: "What is a reason people may turn to new methods of political expression?", answer: "People may feel conventional politics has let them down." },
    { question: "What role does social media play in political participation?", answer: "Social media allows people to be involved without engaging in the real world." },
    { question: "What is the rise of new forms of political participation seen as?", answer: "It is seen as a positive development, but also a cause for concern due to the number of people uninvolved in traditional politics." },
    { question: "What is political apathy?", answer: "A lack of interest or awareness in politics." },
    { question: "What is hapathy?", answer: "People are generally content and see no need to push for political change." },
    { question: "How do levels of participation depend on the issue at stake?", answer: "Participation may be higher for significant issues, e.g., Scottish independence referendum had an 84% turnout." },
    { question: "What factor helps explain declining turnout and increased interest in alternative political activities?", answer: "The generally negative public perception of politicians." },
    { question: "What example illustrates dishonest behavior by MPs?", answer: "The 2009 Daily Telegraph published evidence of widespread abuse of the expenses system by MPs." }
];

function randomlySelectQuestions() {
    const selectedQuestions = [];
    const usedIndexes = new Set();

    while (selectedQuestions.length < 10) {
        const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
        if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            const correctAnswer = questionsAndAnswers[randomIndex].answer;
            const allAnswers = questionsAndAnswers.map(qa => qa.answer);
            const incorrectAnswers = allAnswers.filter(answer => answer !== correctAnswer);
            const shuffledIncorrectAnswers = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
            const answers = [correctAnswer, ...shuffledIncorrectAnswers].sort(() => 0.5 - Math.random());
            selectedQuestions.push({
                question: questionsAndAnswers[randomIndex].question,
                correctAnswer,
                answers
            });
        }
    }

    return selectedQuestions;
}

function startQuiz() {
            const questions = randomlySelectQuestions();
            let score = 0;
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '';

            questions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
                q.answers.forEach((answer, i) => {
                    const answerDiv = document.createElement('div');
                    answerDiv.innerHTML = `<input type="radio" name="question${index}" value="${answer}"> ${answer}`;
                    questionDiv.appendChild(answerDiv);
                });
                quizContainer.appendChild(questionDiv);
            });

            const submitButton = document.createElement('button');
            submitButton
