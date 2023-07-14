import { Slider } from "./class_slider";
import { Page } from "./main_class";

(() => {
    window.addEventListener('DOMContentLoaded', function () {
        const $data_animate_elements: NodeListOf<HTMLDataElement> = document.querySelectorAll('[data-animar]') as NodeListOf<HTMLDataElement>;
        const $header: HTMLElement = document.querySelector('header') as HTMLElement;
        const portfolio_page: Page = new Page($data_animate_elements)

        console.log(portfolio_page);

        portfolio_page.activateScrollAnimations();

        this.document.addEventListener('scroll', function () {
            const animation: string = 'animar';
            
            const $back_top_btn: HTMLButtonElement = document.querySelector('button.back-top-btn') as HTMLButtonElement;

            portfolio_page.animateOnScroll(animation);

            portfolio_page.showScrollTopBtn($back_top_btn);

            portfolio_page.changeNavbarOnScroll($header);

            $back_top_btn.addEventListener('click', portfolio_page.scrollToTop);

        });

        const $slider_projects: NodeListOf<HTMLDivElement> = document.querySelectorAll('.project-container') as NodeListOf<HTMLDivElement>;
        const $arrow_left: HTMLButtonElement = document.querySelector('button.arrow-btn-left') as HTMLButtonElement;
        const $arrow_right: HTMLButtonElement = document.querySelector('button.arrow-btn-right') as HTMLButtonElement;

        const slider: Slider = new Slider($slider_projects, $arrow_left, $arrow_right);

        slider.slideHandler();

        const $mobile_menu_btn: HTMLButtonElement = document.querySelector('button.mobile-menu') as HTMLButtonElement;

        $mobile_menu_btn.addEventListener('click', () => portfolio_page.showHideMobileMenu($mobile_menu_btn));
    });
})();