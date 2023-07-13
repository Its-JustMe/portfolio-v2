export class Page {
    constructor(sections) {
        this.animated_sections = sections;
    }
    // Getters e Setters
    get getDataAnimate() {
        return this.animated_sections;
    }
    set setDataAnimate(sections) {
        this.animated_sections = sections;
    }
    // Métodos da Classe
    animateOnScroll(animation) {
        const top_section = window.scrollY + (window.innerHeight * 3) / 4;
        this.getDataAnimate.forEach(function (element) {
            if ((top_section) > element.offsetTop) {
                element.classList.add(animation);
            }
            else {
                element.classList.remove(animation);
            }
        });
    }
    /** Função que leva o usuário de volta ao topo da página */
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    /** Função que mostra o botão de voltar ao topo na tela
     * @param back_top_btn Elemento do botão
    */
    showScrollTopBtn(back_top_btn) {
        const position_scroll = window.scrollY;
        if (position_scroll > 200) {
            back_top_btn.classList.remove('hidden');
            back_top_btn.classList.add('shown');
        }
        else {
            back_top_btn.classList.remove('shown');
            back_top_btn.classList.add('hidden');
        }
    }
}
