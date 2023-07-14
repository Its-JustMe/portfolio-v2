import { Slider } from "./class_slider.js";
import { Page } from "./main_class.js";
(() => {
    window.addEventListener('DOMContentLoaded', function () {
        const $data_animate_elements = document.querySelectorAll('[data-animar]');
        const $header = document.querySelector('header');
        const portfolio_page = new Page($data_animate_elements);
        this.document.addEventListener('scroll', function () {
            const animation = 'animar';
            const $back_top_btn = document.querySelector('.back-top-btn');
            portfolio_page.animateOnScroll(animation);
            portfolio_page.showScrollTopBtn($back_top_btn);
            portfolio_page.changeNavbarOnScroll($header);
            $back_top_btn.addEventListener('click', portfolio_page.scrollToTop);
        });
        const $slider_projects = document.querySelectorAll('.project-container');
        const $arrow_left = document.querySelector('.arrow-btn-left');
        const $arrow_right = document.querySelector('.arrow-btn-right');
        const slider = new Slider($slider_projects, $arrow_left, $arrow_right);
        slider.slideHandler();
        const $mobile_menu_btn = document.querySelector('.mobile-menu');
        $mobile_menu_btn.addEventListener('click', () => portfolio_page.showHideMobileMenu($mobile_menu_btn));
    });
})();
