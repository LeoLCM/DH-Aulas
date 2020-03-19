const homeController = {
    index: (req, res) => {
        let servicos = [
        {nome: "Desenvolvimento web", imagem: "imagens/undraw_dev_focus.svg"},
        {nome: "Marketing Digital", imagem: "imagens/undraw_social_dashboard.svg"},
        {nome: "Consultoria UX", imagem: "imagens/undraw_mobile_apps.svg"},
        ];

        let carrosel = [
            "/imagens/agency1.jpg",
            "/imagens/agency2.jpg",
            "/imagens/agency3.jpg",
            "/imagens/agency4.jpg",
        ];

        res.render("index", { title: "Home", listaServicos: servicos, banner: carrosel })
    }
};

module.exports = homeController;