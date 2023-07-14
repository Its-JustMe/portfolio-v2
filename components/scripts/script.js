import { Slider } from "./class_slider.js";
import { Page } from "./main_class.js";
import { updateAge } from "./module.js";
(() => {
    window.addEventListener('DOMContentLoaded', function () {
        const $age = document.querySelector('span#age');
        $age.textContent = `${updateAge()}`;
        const $data_animate_elements = document.querySelectorAll('[data-animar]');
        const $header = document.querySelector('header');
        const portfolio_page = new Page($data_animate_elements);
        console.log(portfolio_page);
        portfolio_page.activateScrollAnimations();
        this.document.addEventListener('scroll', function () {
            const animation = 'animar';
            const $back_top_btn = document.querySelector('button.back-top-btn');
            portfolio_page.animateOnScroll(animation);
            portfolio_page.showScrollTopBtn($back_top_btn);
            portfolio_page.changeNavbarOnScroll($header);
            $back_top_btn.addEventListener('click', portfolio_page.scrollToTop);
        });
        const $slider_projects = document.querySelectorAll('.project-container');
        const $arrow_left = document.querySelector('button.arrow-btn-left');
        const $arrow_right = document.querySelector('button.arrow-btn-right');
        const slider = new Slider($slider_projects, $arrow_left, $arrow_right);
        slider.slideHandler();
        const $mobile_menu_btn = document.querySelector('button.mobile-menu');
        $mobile_menu_btn.addEventListener('click', () => portfolio_page.showHideMobileMenu($mobile_menu_btn));
    });
})();
