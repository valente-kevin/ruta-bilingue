const btn = document.querySelector(".container_btn");
const iconBtn = document.querySelector(".icon");

const containerHome = document.querySelector(".container_home");

const btnCurse = document.getElementById("curse");
const btnLearBasics = document.querySelector(".--lear-basics");

const diagnosis = document.querySelector(".diagnosis");

const btnVolver = document.getElementById("volver");
const next = document.getElementById("next");

const btnOption = document.querySelectorAll(".btn_option");

const containeMsg = document.querySelector(".container_message-incomplete");

const sectionCourse = document.querySelector(".section-course");
const btnDiagnosisOfCourse = document.getElementById("btn-diagnosis");

const btnRetur = document.getElementById("retur-home");

const containerLoadSelect = document.querySelector(".loading_animation-course");
const containerSelect = document.querySelector(".container_course-select");

const num3 = document.querySelector(".num-3");
const num2 = document.querySelector(".num-2");
const num1 = document.querySelector(".num-1");

const courseA1 = document.getElementById("a1");
const courseA2 = document.getElementById("a2");
const courseB1 = document.getElementById("b1");
const courseB2 = document.getElementById("b2");
const courseC1 = document.getElementById("c1");
const courseC2 = document.getElementById("c2");

const containerCourseRecoment = document.querySelector(
    ".container_courser-recomendet"
);

const courseRecoment = document.querySelector(".courser_recomendet");

const copiaCourseA1 = courseA1.cloneNode(true);
const copiaCourseA2 = courseA2.cloneNode(true);
const copiaCourseB1 = courseB1.cloneNode(true);
const copiaCourseB2 = courseB2.cloneNode(true);
const copiaCourseC1 = courseC1.cloneNode(true);
const copiaCourseC2 = courseC2.cloneNode(true);

const returnH = document.getElementById("return");

const btnDiagnosis = document.getElementById("btn_diagnosis");

const wordsSpanish = document.querySelectorAll(".word-spanish");
const wordsEnglish = document.querySelectorAll(".word-english");

const sectionLearn = document.querySelector(".section_learn");

const sectionQuestion1 = document.querySelector(".question_1");

const btnContinueQuestion2 = document.querySelector(
    ".container_continue-question2"
);

const btnReturn = document.querySelectorAll(".return-home");

let optSelect = null;

const course = [
    "a1",
    "a2",
    "b1",
    "b2",
    "c1",
    "c2"
];

let wordSelectSpanish = null;
let wordSelectEnglish = null;

let elementWordSpanish = null;
let elementWordEnglish = null;

const wordCompleted = new Set();


const STORAGE_KEY = "englishCourseQuestion1";

function desapperHome() {
    containerHome.classList.add("desapper");
    containerHome.classList.remove("apper");
    containerHome.classList.remove("desaparecer_home");
}

function apperHome() {
    containerHome.classList.remove("desaparecer_home");
    containerHome.classList.remove("desapper");
}

function apperDiagnosis() {
    diagnosis.classList.add("apper");
}

function desapperDiagnosis() {
    diagnosis.classList.remove("apper");
}

function apperCurse() {
    sectionCourse.classList.add("apper-section-course");
}

function desapperCurse() {
    sectionCourse.classList.remove("apper-section-course");
}

function apperContainerSelect() {
    containerSelect.classList.add("apper");
}

function desapperContainerSelect() {
    containerSelect.classList.remove("apper");
}

function apperSectionLearn() {
    sectionLearn.classList.add("apper-section");
}

function desapperSectionLearn() {
    sectionLearn.classList.remove("apper-section");
}

function contador() {
    num3.classList.add("apper-num");

    num3.addEventListener("animationend", () => {
        num2.classList.add("apper-num");
    }, { once: true });

    num2.addEventListener("animationend", () => {
        num1.classList.add("apper-num");
    }, { once: true });

    num1.addEventListener("animationend", () => {
        containerLoadSelect.classList.add("desapper");
        courseRecoment.classList.add("apper");
        containerCourseRecoment.classList.add("apper");

        num1.classList.remove("apper-num");
        num2.classList.remove("apper-num");
        num3.classList.remove("apper-num");
    }, { once: true });

    desapperDiagnosis();
    apperContainerSelect();
}

btn.addEventListener("click", () => {
    iconBtn.classList.add("icon-animation");

    containerHome.classList.add("desaparecer_home");

    containerHome.addEventListener("animationend", () => {
        apperDiagnosis();
        desapperCurse();
    }, { once: true });

    btnOption.forEach((btn) => {
        btn.classList.remove("btn_option-select");
    });

    optSelect = null;
});

btnVolver.addEventListener("click", () => {
    iconBtn.classList.remove("icon-animation");

    desapperDiagnosis();
    desapperHome();
    apperHome();
});

btnOption.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnOption.forEach((e) => {
            e.classList.remove("btn_option-select");
        });

        btn.classList.add("btn_option-select");

        optSelect = btn.value;
    });
});

next.addEventListener("click", () => {
    containerLoadSelect.classList.remove("desapper");
    containerCourseRecoment.classList.remove("apper");

    if (course.includes(optSelect)) {
        contador();

        if (optSelect === "a1") {
            courseRecoment.appendChild(copiaCourseA1);
        } else if (optSelect === "a2") {
            courseRecoment.appendChild(copiaCourseA2);
        } else if (optSelect === "b1") {
            courseRecoment.appendChild(copiaCourseB1);
        } else if (optSelect === "b2") {
            courseRecoment.appendChild(copiaCourseB2);
        } else if (optSelect === "c1") {
            courseRecoment.appendChild(copiaCourseC1);
        } else if (optSelect === "c2") {
            courseRecoment.appendChild(copiaCourseC2);
        }
    } else {
        containeMsg.classList.add("apper_msg-incomplete");

        containeMsg.addEventListener("animationend", () => {
            containeMsg.classList.remove("apper_msg-incomplete");
        }, { once: true });
    }
});

btnCurse.addEventListener("click", () => {
    desapperHome();
    desapperDiagnosis();
    apperCurse();
});

btnDiagnosisOfCourse.addEventListener("click", () => {
    desapperCurse();
    apperDiagnosis();
});

btnLearBasics.addEventListener("click", () => {
    apperSectionLearn();
    desapperHome();
});

btnReturn.forEach((btn) => {
    btn.addEventListener("click", () => {
        desapperSectionLearn();
        apperHome();
    });
});

btnRetur.addEventListener("click", () => {
    desapperCurse();
    apperHome();
});

returnH.addEventListener("click", () => {
    desapperContainerSelect();
    desapperDiagnosis();
    apperHome();

    iconBtn.classList.remove("icon-animation");

    if (courseRecoment.firstChild) {
        courseRecoment.removeChild(courseRecoment.firstChild);
    }
});

function getProgress() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return {
            completedWords: [],
            completed: false
        };
    }

    try {
        return JSON.parse(data);
    } catch {
        return {
            completedWords: [],
            completed: false
        };
    }
}

function saveProgress() {
    const progress = {
        completedWords: [...wordCompleted],
        completed:
            wordCompleted.size === Object.keys(question1).length
    };

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}

function mostrarFelicitaciones() {
    sectionQuestion1.classList.add("opacity-question");
    btnContinueQuestion2.classList.add("apper");
    saveProgress();
}

function findEnglishWord(spanishWord) {
    const englishWord = question1[spanishWord];

    return document.querySelector(
        `.word-english[data-value="${englishWord}"]`
    );
}

function restoreProgress() {
    const progress = getProgress();

    progress.completedWords.forEach((spanishWord) => {
        const spanishElement = document.querySelector(
            `.word-spanish[data-value="${spanishWord}"]`
        );

        const englishElement = findEnglishWord(spanishWord);

        if (spanishElement && englishElement) {
            spanishElement.classList.add(
                "selected-pairs",
                "opacity-word"
            );

            englishElement.classList.add(
                "selected-pairs",
                "opacity-word"
            );

            wordCompleted.add(spanishWord);
        }
    });

    if (progress.completed) {
        mostrarFelicitaciones();
    }
}

function code() {
    elementWordEnglish.classList.add("selected-pairs");
    elementWordSpanish.classList.add("selected-pairs");

    elementWordSpanish.addEventListener("animationend", () => {
        elementWordSpanish.classList.add("opacity-word");
    }, { once: true });

    elementWordEnglish.addEventListener("animationend", () => {
        elementWordEnglish.classList.add("opacity-word");
    }, { once: true });

    saveProgress();
}

function verificacionWord(question) {
    if (!wordSelectSpanish || !wordSelectEnglish) {
        return;
    }

    if (question[wordSelectSpanish] === wordSelectEnglish) {

        wordCompleted.add(wordSelectSpanish);

        code();

        if (
            wordCompleted.size ===
            Object.keys(question1).length
        ) {
            mostrarFelicitaciones();
            console.log("Desafio completado")
        }

        wordSelectSpanish = null;
        wordSelectEnglish = null;

        elementWordSpanish = null;
        elementWordEnglish = null;
    } else {
        console.log("La combinación es incorrecta");
    }
}

wordsSpanish.forEach((word) => {
    word.addEventListener("click", () => {
        if (word.classList.contains("opacity-word")) {
            return;
        }

        wordsSpanish.forEach((e) => {
            e.classList.remove("select-word");
        });

        word.classList.add("select-word");

        wordSelectSpanish = word.dataset.value;
        elementWordSpanish = word;

        verificacionWord(question1);
    });
});

wordsEnglish.forEach((word) => {
    word.addEventListener("click", () => {
        if (word.classList.contains("opacity-word")) {
            return;
        }

        wordsEnglish.forEach((e) => {
            e.classList.remove("select-word");
        });

        word.classList.add("select-word");

        wordSelectEnglish = word.dataset.value;
        elementWordEnglish = word;

        verificacionWord(question1);
    });
});

restoreProgress();
