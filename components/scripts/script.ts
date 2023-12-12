import { Slider } from "./class_slider";
import { Page } from "./main_class";
import { updateAge } from "./module";

(() => {
    window.addEventListener('DOMContentLoaded', function () {
        
        const $download_cv_btn: HTMLAnchorElement = document.querySelector('#download-cv') as HTMLAnchorElement;
        $download_cv_btn.addEventListener('click', () => alert('Disponível em breve'));

        const $age: HTMLSpanElement = document.querySelector('span#age') as HTMLSpanElement;
        $age.textContent = `${updateAge()}`;

        const $data_animate_elements: NodeListOf<HTMLDataElement> = document.querySelectorAll('[data-animar]') as NodeListOf<HTMLDataElement>;
        const $header: HTMLElement = document.querySelector('header') as HTMLElement;
        const portfolio_page: Page = new Page($data_animate_elements)

        portfolio_page.activateScrollAnimations();

        this.document.addEventListener('scroll', function () {
            const animation: string = 'animar';
            
            const $back_top_btn: HTMLButtonElement = document.querySelector('button.back-top-btn') as HTMLButtonElement;

            portfolio_page.animateOnScroll(animation);

            portfolio_page.showScrollTopBtn($back_top_btn);

            portfolio_page.changeNavbarOnScroll($header);

            $back_top_btn.addEventListener('click', portfolio_page.scrollToTop);

        });

        const $services: NodeListOf<HTMLDivElement> = document.querySelectorAll('.slider > article') as NodeListOf<HTMLDivElement>;
        const $btn_left: HTMLButtonElement = document.querySelector('button.slider-btn.left') as HTMLButtonElement;
        const $btn_right: HTMLButtonElement = document.querySelector('button.slider-btn.right') as HTMLButtonElement;

        const slider_services: Slider = new Slider($services, $btn_left, $btn_right);

        slider_services.slideHandler();

        const $mobile_menu_btn: HTMLButtonElement = document.querySelector('button.mobile-menu') as HTMLButtonElement;

        $mobile_menu_btn.addEventListener('click', () => portfolio_page.showHideMobileMenu($mobile_menu_btn));
    });
})();