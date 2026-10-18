
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio carregado com sucesso!");

    const projetos = document.querySelectorAll(".card");

    projetos.forEach((projeto, index) => {
        projeto.addEventListener("mouseenter", () => {
            projeto.style.borderColor = "#38bdf8";
        });

        projeto.addEventListener("mouseleave", () => {
            projeto.style.borderColor = "#293750";
        });
    });
});
