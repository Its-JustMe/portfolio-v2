interface ResponsiveMethods {
    showHideMobileMenu: () => void;
}

export class Page {
    private animated_sections: HTMLElement[];

    constructor (sections: HTMLElement[]) {
        this.animated_sections = sections;
    }

    // Getters e Setters
    public get getDataAnimate (): HTMLElement[] {
        return this.animated_sections;
    }
    public set setDataAnimate (sections: HTMLElement[]) {
        this.animated_sections = sections;
    }

    // Métodos da Classe

    public animateOnScroll (animation: string): void {
        const top_section: number = window.scrollY + (window.innerHeight * 3) / 4;

        this.getDataAnimate.forEach (function (element) {
            if ((top_section) > element.offsetTop) {
                element.classList.add(animation);
            } else {
                element.classList.remove(animation);
            }
        });
    }

    /** Função que leva o usuário de volta ao topo da página */
    public scrollToTop (): void {
        window.scrollTo(0, 0);
    }

    /** Função que mostra o botão de voltar ao topo na tela
     * @param back_top_btn Elemento do botão
    */
    public showScrollTopBtn (back_top_btn: HTMLDivElement): void {
        const position_scroll: number = window.scrollY;

        if (position_scroll > 200) {
            back_top_btn.classList.remove('hidden');
            back_top_btn.classList.add('shown');
        } else {
            back_top_btn.classList.remove('shown');
            back_top_btn.classList.add('hidden');
        }
    }

    // Métodos da Interface
}