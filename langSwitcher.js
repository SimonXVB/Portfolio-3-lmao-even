const data = {
        "en": {
                "header-h1": "My name is Simon",
                "stack-p": "The tech I work with",
                "projectsH1": "Projects",
                "projects-swan": "A simple media player made using electron",
                "projects-posta": "A social media app inspired by Twitter",
                "projects-odin": `A repo containing all of my "The Odin Project" projects`,
                "github-a": "Check out the GitHub!"
        },
        "de": {
                "header-h1": "Mein Name ist Simon",
                "stack-p": "Technologien, mit denen ich arbeite",
                "projectsH1": "Projekte",
                "projects-swan": "Ein simpler Media Player, entwickelt mit Electron",
                "projects-posta": "Eine Social-Media App, inspiriert von Twitter",
                "projects-odin": `Ein Repo, welches all meine "The Odin Project" Projekte enthält`,
                "github-a": "Link zum GitHub Profil!"
        }
};

let currLang = navigator.language || "en";

const headerH1 = document.querySelector(".header-h1");
const stackP = document.querySelector(".stack-p");
const projectsH1 = document.querySelector(".projects-h1");
const projectsSwan = document.querySelector(".projects-swan");
const projectsPosta = document.querySelector(".projects-posta");
const projectsOdin = document.querySelector(".projects-odin");
const githubA = document.querySelector(".github-a");
const projectsA = document.querySelectorAll(".projects-a");
const langButton = document.querySelectorAll(".lang-button");

function checkLang() {
        if(currLang === "de") {
                langButton.forEach((lang) => lang.innerHTML = "English");
                document.documentElement.lang = "de"
                projectsA.forEach((project) => project.innerHTML = data.de["projectsH1"]);
                headerH1.innerHTML = data.de["header-h1"];
                stackP.innerHTML = data.de["stack-p"];
                projectsH1.innerHTML = data.de["projectsH1"];
                projectsSwan.innerHTML = data.de["projects-swan"];
                projectsPosta.innerHTML = data.de["projects-posta"];
                projectsOdin.innerHTML = data.de["projects-odin"];
                githubA.innerHTML = data.de["github-a"];
        } else {
                langButton.forEach((lang) => lang.innerHTML = "Deutsch");
                document.documentElement.lang = "en"
                projectsA.forEach((project) => project.innerHTML = data.en["projectsH1"]);
                headerH1.innerHTML = data.en["header-h1"];
                stackP.innerHTML = data.en["stack-p"];
                projectsH1.innerHTML = data.en["projectsH1"];
                projectsSwan.innerHTML = data.en["projects-swan"];
                projectsPosta.innerHTML = data.en["projects-posta"];
                projectsOdin.innerHTML = data.en["projects-odin"];
                githubA.innerHTML = data.en["github-a"];
        };
};
checkLang();

langButton.forEach((lang) => {
    lang.addEventListener("click", () => {
            currLang === "de" ? currLang = "en" : currLang = "de";
            checkLang();
    });
});