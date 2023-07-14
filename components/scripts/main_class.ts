interface ResponsiveMethods {
    showHideMobileMenu: (menu_btn: HTMLButtonElement) => void;
}

export class Page implements ResponsiveMethods {
    private animated_sections: NodeListOf<HTMLDataElement>;

    constructor (sections: NodeListOf<HTMLDataElement>) {
        this.animated_sections = sections;
    }

    // Getters e Setters
    public get getDataAnimate (): NodeListOf<HTMLDataElement> {
        return this.animated_sections;
    }
    public set setDataAnimate (sections: NodeListOf<HTMLDataElement>) {
        this.animated_sections = sections;
    }

    // Métodos da Classe

    public activateScrollAnimations (): void {
        const data_animate: NodeListOf<HTMLDataElement> = this.getDataAnimate;

        for (let i: number = 0; i < data_animate.length; i++) {
            const current_element: HTMLDataElement = data_animate[i];
            current_element.setAttribute('data-animar', 'true');
        }
    }

    /** Função que ativa uma animação de transição aos elementos conforme o usuário rola a página 
     * @param animation Nome da classe da animação a ser ativada/removida
    */
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
    public showScrollTopBtn (back_top_btn: HTMLButtonElement): void {
        const position_scroll: number = window.scrollY;

        if (position_scroll > 200) {
            back_top_btn.classList.remove('hidden');
            back_top_btn.classList.add('shown');
        } else {
            back_top_btn.classList.remove('shown');
            back_top_btn.classList.add('hidden');
        }
    }

    public changeNavbarOnScroll (header: HTMLElement): void {
        const current_scroll = window.scrollY;
        
        if (current_scroll > 150) {
            header.classList.remove('hidden');
            header.classList.add('shown');
        } if (current_scroll === 0) {
            header.classList.remove('hidden');
            header.classList.remove('shown');
        }
    }

    // Métodos da Interface

    public showHideMobileMenu(menu_btn: HTMLButtonElement): void {
        const navbar: HTMLElement = document.querySelector('.menu') as HTMLElement;
        const menu_items: NodeListOf<HTMLLIElement> = document.querySelectorAll('.menu-item') as NodeListOf<HTMLLIElement>;
        const header: HTMLElement = document.querySelector('header') as HTMLElement;
        
        if (menu_btn.classList.contains('active')) {
            menu_btn.classList.remove('active');
            
            navbar.classList.remove('active');
            header.classList.remove('active');
        } else {
            menu_btn.classList.add('active');
        
            navbar.classList.add('active');
            header.classList.add('active');
        }
        
        for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].onclick = function() {
                menu_btn.classList.remove('active');
            
                navbar.classList.remove('active');
                header.classList.remove('active');
            };
        }
    }
    
}