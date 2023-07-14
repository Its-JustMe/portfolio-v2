import { Slider } from "./class_slider";
import { Page } from "./main_class";

(() => {
    window.addEventListener('DOMContentLoaded', function () {
        const $data_animate_elements: HTMLElement[] = document.querySelectorAll('[data-animar]') as unknown as HTMLElement[];
        const $header: HTMLElement = document.querySelector('header') as HTMLElement;

        const portfolio_page: Page = new Page($data_animate_elements);

        this.document.addEventListener('scroll', function () {
            const animation: string = 'animar';
            
            const $back_top_btn: HTMLDivElement = document.querySelector('.back-top-btn') as HTMLDivElement;

            portfolio_page.animateOnScroll(animation);

            portfolio_page.showScrollTopBtn($back_top_btn);

            portfolio_page.changeNavbarOnScroll($header);

            $back_top_btn.addEventListener('click', portfolio_page.scrollToTop);

        });

        const $slider_projects: HTMLDivElement[] = document.querySelectorAll('.project-container') as unknown as HTMLDivElement[];
        const $arrow_left: HTMLDivElement = document.querySelector('.arrow-btn-left') as HTMLDivElement;
        const $arrow_right: HTMLDivElement = document.querySelector('.arrow-btn-right') as HTMLDivElement;

        const slider: Slider = new Slider($slider_projects, $arrow_left, $arrow_right);

        slider.slideHandler();

        const $mobile_menu_btn: HTMLDivElement = document.querySelector('.mobile-menu') as HTMLDivElement;

        $mobile_menu_btn.addEventListener('click', () => portfolio_page.showHideMobileMenu($mobile_menu_btn));
    });
})();