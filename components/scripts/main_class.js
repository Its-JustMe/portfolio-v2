/** Classe principal do projeto, que contém métodos e atributos da página em geral */
export class Page {
    /** Construtor da classe
     * @param sections Array de seções que serão animadas na página
    */
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
    /** Função que ativa o atributo de animações das seções */
    activateScrollAnimations() {
        const data_animate = this.getDataAnimate;
        for (let i = 0; i < data_animate.length; i++) {
            const current_element = data_animate[i];
            current_element.setAttribute('data-animar', 'true');
        }
    }
    /** Função que ativa uma animação de transição aos elementos conforme o usuário rola a página
     * @param animation Nome da classe da animação a ser ativada/removida
    */
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
    /**Função que muda a classe da navbar quando o usuário rola a página
     * @param header Cabeçalho/navbar
     */
    changeNavbarOnScroll(header) {
        const current_scroll = window.scrollY;
        if (current_scroll > 150) {
            header.classList.remove('hidden');
            header.classList.add('shown');
        }
        if (current_scroll === 0) {
            header.classList.remove('hidden');
            header.classList.remove('shown');
        }
    }
    // Métodos da Interface
    showHideMobileMenu(menu_btn) {
        const navbar = document.querySelector('.menu');
        const menu_items = document.querySelectorAll('.menu-item');
        const header = document.querySelector('header');
        if (menu_btn.classList.contains('active')) {
            menu_btn.classList.remove('active');
            navbar.classList.remove('active');
            header.classList.remove('active');
        }
        else {
            menu_btn.classList.add('active');
            navbar.classList.add('active');
            header.classList.add('active');
        }
        for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].onclick = function () {
                menu_btn.classList.remove('active');
                navbar.classList.remove('active');
                header.classList.remove('active');
            };
        }
    }
}
