
// ========================================
// ЭЛЕКТРОННЫЙ СПРАВОЧНИК ШКОЛЬНЫХ КРУЖКОВ
// ========================================


// 1. СПИСОК КРУЖКОВ

const clubs = [
    {
        id: 1,
        name: "Хор",
        category: "Музыка",
        image: "https://school.tver.ru/system/sections/images/000/000/471/medium/1764686512.jpg?1764686512",
        year: 2024,
        description: "Занятия хоровым пением и развитие музыкальных способностей.",
        schedule: [
            "Понедельник, среда — 17:00 – 18:30"
        ]
    },
    {
        id: 2,
        name: "Медиа-центр",
        category: "Общественная деятельность",
        image: "https://school.tver.ru/system/sections/images/000/000/484/medium/1764844145.jpg?1764844145",
        year: 2023,
        description: "Школьная журналистика, создание материалов и освещение событий школьной жизни.",
        schedule: null
    },
    {
        id: 3,
        name: "Музей истории школы",
        category: "Образование",
        image: "https://school.tver.ru/system/sections/images/000/000/505/medium/1765286218.jpeg?1765286218",
        year: 2005,
        description: "Изучение истории школы, сохранение памятных материалов и школьных традиций.",
        schedule: null
    },
    {
        id: 4,
        name: "Каратэ",
        category: "Спорт",
        image: "https://school.tver.ru/system/sections/images/000/000/507/medium/1765287170.png?1765287170",
        year: 2020,
        description: "Занятия каратэ, развитие физической подготовки и дисциплины.",
        schedule: [
            "Вторник, четверг — 17:00 – 19:00",
            "Суббота — 13:00 – 15:00"
        ]
    },
    {
        id: 6,
        name: "Юный инспектор",
        category: "Общественная деятельность",
        image: "https://school.tver.ru/system/sections/images/000/000/695/medium/1793010022.png?1793010022",
        year: 2026,
        description: "Изучение правил дорожного движения и основ безопасного поведения.",
        schedule: null
    },
    {
        id: 7,
        name: "ОчУмелые ручки",
        category: "Творчество",
        image: "https://school.tver.ru/system/sections/images/000/000/696/medium/1793010451.jpeg?1793010451",
        year: 2026,
        description: "Творческие занятия, изготовление поделок и развитие практических навыков.",
        schedule: [
            "Вторник, пятница — 16:00 – 17:30"
        ]
    },
    {
        id: 8,
        name: "Вокальный ансамбль «Краски»",
        category: "Музыка",
        image: "https://school.tver.ru/system/sections/images/000/000/697/medium/1793010994.jpeg?1793010994",
        year: 2026,
        description: "Вокальные занятия, развитие музыкального слуха и подготовка выступлений.",
        schedule: [
            "Вторник, четверг — 17:00 – 18:30"
        ]
    },
    {
        id: 9,
        name: "Волейбол",
        category: "Спорт",
        image: "https://school.tver.ru/system/sections/images/000/000/698/medium/1793011756.png?1793011756",
        year: 2026,
        description: "Командная спортивная игра, тренировки и развитие физических навыков.",
        schedule: [
            "Среда — 16:30 – 18:00",
            "Суббота — 15:00 – 16:30"
        ]
    },
    {
        id: 10,
        name: "Финансовая грамотность",
        category: "Образование",
        image: "https://school.tver.ru/system/sections/images/000/000/699/medium/1793012976.jpeg?1793012976",
        year: 2023,
        description: "Изучение основ финансовой грамотности, планирования бюджета и обращения с деньгами.",
        schedule: null
    },
    {
        id: 12,
        name: "Мир танца",
        category: "Творчество",
        image: "https://school.tver.ru/system/sections/images/000/000/701/medium/1793017988.jpeg?1793017988",
        year: 2023,
        description: "Танцевальные занятия, развитие пластики, чувства ритма и координации.",
        schedule: [
            "Вторник, пятница:",
            "Младшая группа — 16:00 – 17:00",
            "Старшая группа — 17:00 – 18:30"
        ]
    },
    {
        id: 13,
        name: "Проектная мастерская",
        category: "Образование",
        image: "https://school.tver.ru/system/sections/images/000/000/702/medium/1793019257.jpeg?1793019257",
        year: 2023,
        description: "Разработка проектов, поиск идей и развитие исследовательских навыков.",
        schedule: null
    },
    {
        id: 15,
        name: "Театральный перформанс",
        category: "Театр",
        image: "https://school.tver.ru/system/sections/images/000/000/704/medium/1793021033.jpeg?1793021033",
        year: 2023,
        description: "Создание театральных постановок и развитие творческих способностей.",
        schedule: [
            "Понедельник, среда, пятница:",
            "Младшая группа — 16:00 – 17:30",
            "Старшая группа — 17:30 – 19:00"
        ]
    }
];


// 2. ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СТРАНИЦЫ

const clubsContainer = document.getElementById("clubsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");

const clubModal = document.getElementById("clubModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");


// 3. ОТОБРАЖЕНИЕ КАРТОЧЕК КРУЖКОВ

function displayClubs(clubList) {

    if (!clubsContainer) return;

    clubsContainer.innerHTML = "";

    if (resultsCount) {
        resultsCount.textContent =
            "Найдено кружков: " + clubList.length;
    }

    if (clubList.length === 0) {
        if (noResults) {
            noResults.classList.remove("hidden");
        }
        return;
    }

    if (noResults) {
        noResults.classList.add("hidden");
    }

    clubList.forEach(club => {

        const card = document.createElement("div");

        card.className = "club-card";

        card.innerHTML = `
            <img
                src="${club.image}"
                alt="${club.name}"
                class="club-image"
                loading="lazy"
            >

            <span class="club-category">
                ${club.category}
            </span>

            <h3>${club.name}</h3>

            <p>${club.description}</p>

            <div class="club-info">
                📅 Работает с ${club.year} года
            </div>

            <button class="details-btn" data-id="${club.id}">
                Подробнее
            </button>
        `;

        clubsContainer.appendChild(card);
    });
}


// 4. ПОИСК И ФИЛЬТРАЦИЯ

function filterClubs() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedCategory = categoryFilter.value;

    const filteredClubs = clubs.filter(club => {

        const matchesName =
            club.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "Все" ||
            club.category === selectedCategory;

        return matchesName && matchesCategory;
    });

    displayClubs(filteredClubs);
}


// 5. ОТКРЫТИЕ ПОДРОБНОЙ ИНФОРМАЦИИ

if (clubsContainer) {

    clubsContainer.addEventListener("click", function(event) {

        const button = event.target.closest(".details-btn");

        if (!button) return;

        const clubId = Number(button.dataset.id);

        const club = clubs.find(item => item.id === clubId);

        if (!club) return;

        let scheduleHTML = "";

        if (club.schedule) {

            scheduleHTML = `
                <div class="schedule">
                    <h3>Расписание занятий:</h3>
                    ${club.schedule.map(item =>
                        `<p>${item}</p>`
                    ).join("")}
                </div>
            `;

        } else {

            scheduleHTML = `
                <div class="schedule">
                    <h3>Расписание занятий</h3>
                    <p>Дополнительное образование</p>
                </div>
            `;
        }

        modalBody.innerHTML = `
            <img
                src="${club.image}"
                alt="${club.name}"
                class="modal-image"
            >

            <span class="club-category">
                ${club.category}
            </span>

            <h2>${club.name}</h2>

            <p>${club.description}</p>

            <p class="club-info">
                <strong>Направление:</strong>
                ${club.category}
            </p>

            <p class="club-info">
                <strong>Год начала работы:</strong>
                ${club.year}
            </p>

            ${scheduleHTML}
        `;

        clubModal.classList.remove("hidden");
    });
}


// 6. ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА

if (closeModal && clubModal) {

    closeModal.addEventListener("click", function() {
        clubModal.classList.add("hidden");
    });

    clubModal.addEventListener("click", function(event) {

        if (event.target === clubModal) {
            clubModal.classList.add("hidden");
        }
    });
}

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && clubModal) {
        clubModal.classList.add("hidden");
    }
});


// 7. ЗАПУСК ПОИСКА И ФИЛЬТРАЦИИ

if (searchInput) {
    searchInput.addEventListener("input", filterClubs);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterClubs);
}


// 8. ПЕРВОНАЧАЛЬНОЕ ОТОБРАЖЕНИЕ

displayClubs(clubs);
