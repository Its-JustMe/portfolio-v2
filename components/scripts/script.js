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
        portfolio_page.activateScrollAnimations();
        this.document.addEventListener('scroll', function () {
            const animation = 'animar';
            const $back_top_btn = document.querySelector('button.back-top-btn');
            portfolio_page.animateOnScroll(animation);
            portfolio_page.showScrollTopBtn($back_top_btn);
            portfolio_page.changeNavbarOnScroll($header);
            $back_top_btn.addEventListener('click', portfolio_page.scrollToTop);
        });
        const $services = document.querySelectorAll('.slider > article');
        const $btn_left = document.querySelector('button.slider-btn.left');
        const $btn_right = document.querySelector('button.slider-btn.right');
        const slider_services = new Slider($services, $btn_left, $btn_right);
        slider_services.slideHandler();
        const $mobile_menu_btn = document.querySelector('button.mobile-menu');
        $mobile_menu_btn.addEventListener('click', () => portfolio_page.showHideMobileMenu($mobile_menu_btn));
    });
})();
