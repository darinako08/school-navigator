const questions = [
{title:"Что тебе больше всего нравится делать в свободное время?",hint:"Выбери самый близкий вариант.",answers:[
["Рисовать, мастерить и создавать что-то своими руками",["Творчество"]],
["Петь, слушать музыку или выступать",["Музыка","Театр"]],
["Играть в подвижные игры и заниматься спортом",["Спорт"]],
["Узнавать новое, исследовать и придумывать проекты",["Образование"]],
["Общаться, писать, снимать и помогать другим",["Общественная деятельность"]]]},
{title:"Какой формат занятий тебе интереснее?",hint:"Представь, что выбираешь занятие после уроков.",answers:[
["Тренировки и движение",["Спорт"]],["Творческая мастерская",["Творчество"]],
["Репетиции, сцена и выступления",["Музыка","Театр"]],
["Обсуждения, исследования и проекты",["Образование","Общественная деятельность"]]]},
{title:"Что у тебя получается лучше всего?",hint:"Выбери наиболее подходящее качество.",answers:[
["Фантазировать и придумывать необычные идеи",["Творчество"]],
["Чувствовать ритм, петь или выступать",["Музыка","Театр"]],
["Быть активным и работать в команде",["Спорт"]],
["Анализировать информацию и решать задачи",["Образование"]],
["Организовывать дела и находить общий язык с людьми",["Общественная деятельность"]]]},
{title:"Где ты хотел(а) бы проявить себя?",hint:"Выбери место или ситуацию, которая тебя вдохновляет.",answers:[
["На сцене или перед зрителями",["Театр","Музыка"]],
["На спортивной площадке",["Спорт"]],
["В мастерской, где можно создавать вещи",["Творчество"]],
["В проекте, исследовании или школьном мероприятии",["Образование","Общественная деятельность"]]]},
{title:"Какой результат занятий порадовал бы тебя больше?",hint:"Подумай, чем хотелось бы гордиться.",answers:[
["Сделанной своими руками работой",["Творчество"]],
["Выступлением или музыкальным номером",["Музыка","Театр"]],
["Спортивным достижением",["Спорт"]],
["Новыми знаниями и удачным проектом",["Образование"]],
["Полезным делом для школы и других людей",["Общественная деятельность"]]]},
{title:"Как тебе комфортнее заниматься?",hint:"Выбирай по настроению.",answers:[
["В команде, вместе с другими ребятами",["Спорт","Общественная деятельность","Театр"]],
["Спокойно и сосредоточенно, в своём темпе",["Образование","Творчество"]],
["В группе, где можно репетировать и выступать",["Музыка","Театр"]]]},
{title:"Что бы ты хотел(а) попробовать в первую очередь?",hint:"Выбери самое привлекательное.",answers:[
["Создать что-нибудь красивое и необычное",["Творчество"]],
["Научиться петь, танцевать или играть роль",["Музыка","Театр"]],
["Освоить новый вид спорта",["Спорт"]],
["Разобраться в интересной теме или сделать проект",["Образование"]],
["Участвовать в жизни школы и помогать людям",["Общественная деятельность"]]]}
];

const clubs = [
["Хор","Музыка","Для тех, кому нравится петь вместе с другими."],
["Медиа-центр","Общественная деятельность","Для тех, кому интересны школьные новости, общение и медиа."],
["Музей истории школы","Образование","Для любознательных, которым интересны история и исследования."],
["Каратэ","Спорт","Для тех, кто хочет развивать силу, ловкость и дисциплину."],
["Юный инспектор","Общественная деятельность","Для тех, кому интересны безопасность и полезные дела."],
["ОчУмелые ручки","Творчество","Для любителей мастерить и создавать вещи своими руками."],
["Вокальный ансамбль «Краски»","Музыка","Для тех, кто любит вокал и музыкальные выступления."],
["Волейбол","Спорт","Для активных ребят, которым нравится командная игра."],
["Финансовая грамотность","Образование","Для тех, кто хочет лучше разбираться в деньгах и планировании."],
["Мир танца","Спорт","Для тех, кому нравятся движение, танец и работа над собой."],
["Проектная мастерская","Образование","Для тех, кто любит придумывать, планировать и воплощать идеи."],
["Театральный перформанс","Театр","Для тех, кто хочет попробовать себя на сцене."]
];

let step = 0;
const chosen = Array(questions.length).fill(null);
const $ = id => document.getElementById(id);
const quiz = document.querySelector(".quiz-panel");
const result = $("resultArea");

function render() {
  const q = questions[step], percent = Math.round((step + 1) / questions.length * 100);
  $("questionCounter").textContent = `Вопрос ${step + 1} из ${questions.length}`;
  $("progressPercent").textContent = `${percent}%`;
  $("progressBar").style.width = `${percent}%`;
  $("questionTitle").textContent = q.title;
  $("questionHint").textContent = q.hint;
  $("answers").innerHTML = "";
  q.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.className = "answer-option" + (chosen[step] === index ? " selected" : "");
    const radio = document.createElement("input");
    radio.type = "radio"; radio.name = "answer"; radio.checked = chosen[step] === index;
    radio.addEventListener("change", () => { chosen[step] = index; render(); });
    const span = document.createElement("span"); span.textContent = answer[0];
    label.append(radio, span); $("answers").append(label);
  });
  $("backButton").disabled = step === 0;
  $("nextButton").disabled = chosen[step] === null;
  $("nextButton").textContent = step === questions.length - 1 ? "Показать результат" : "Далее";
}

function showResults() {
  const scores = {};
  chosen.forEach((answerIndex, questionIndex) => {
    questions[questionIndex].answers[answerIndex][1].forEach(tag => scores[tag] = (scores[tag] || 0) + 1);
  });
  const best = Math.max(...Object.values(scores));
  const categories = Object.keys(scores).filter(tag => scores[tag] === best);
  const matches = clubs.filter(club => categories.includes(club[1])).slice(0, 6);
  $("resultDescription").textContent = categories.length === 1
    ? `Судя по ответам, тебе особенно близко направление «${categories[0].toLowerCase()}». Посмотри эти кружки:`
    : `У тебя несколько интересов: ${categories.map(x => x.toLowerCase()).join(", ")}. Возможно, тебе подойдут эти занятия:`;
  $("recommendations").innerHTML = "";
  matches.forEach(club => {
    const card = document.createElement("article"); card.className = "recommendation-card";
    const cat = document.createElement("span"); cat.className = "recommendation-category"; cat.textContent = club[1];
    const name = document.createElement("h3"); name.textContent = club[0];
    const desc = document.createElement("p"); desc.textContent = club[2];
    card.append(cat, name, desc); $("recommendations").append(card);
  });
  quiz.hidden = true; result.hidden = false;
  window.scrollTo({top:0,behavior:"smooth"});
}

$("backButton").addEventListener("click", () => { if (step > 0) { step--; render(); } });
$("nextButton").addEventListener("click", () => {
  if (chosen[step] === null) return;
  if (step < questions.length - 1) { step++; render(); } else showResults();
});
$("restartButton").addEventListener("click", () => {
  step = 0; chosen.fill(null); result.hidden = true; quiz.hidden = false; render();
  window.scrollTo({top:0,behavior:"smooth"});
});
render();
