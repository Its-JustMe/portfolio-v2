export class Slider {
    constructor(slides, arrL, arrR) {
        this.slides = slides;
        this.arrow_left = arrL;
        this.arrow_right = arrR;
    }
    // Getters e Setters
    get getSlider() {
        return this.slides;
    }
    get getArrowLeft() {
        return this.arrow_left;
    }
    get getArrowRight() {
        return this.arrow_right;
    }
    set setSlider(slider) {
        this.slides = slider;
    }
    set setArrowLeft(arrL) {
        this.arrow_left = arrL;
    }
    set setArrowRight(arrR) {
        this.arrow_right = arrR;
    }
    // Métodos da classe
    /**Função que remove a classe active de todos os slides
    */
    clearSlides() {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains('active-right')) {
                this.slides[i].classList.remove('active-right');
            }
            else {
                this.slides[i].classList.remove('active-left');
            }
        }
    }
    /** Função que avança um slide na página
     * @param index_slide Posição do slide que será mostrado na página
    */
    nextSlide(index_slide) {
        this.slides[index_slide].classList.add('active-right');
    }
    previousSlide(index_slide) {
        this.slides[index_slide].classList.add('active-left');
    }
    /** Função responsável pelas interações com o Slider
     */
    slideHandler() {
        let slide_atual = 0;
        this.arrow_right.addEventListener('click', () => {
            slide_atual++;
            slide_atual = slide_atual > this.slides.length - 1 ? 0 : slide_atual;
            this.clearSlides();
            this.nextSlide(slide_atual);
        });
        this.arrow_left.addEventListener('click', () => {
            slide_atual--;
            slide_atual = slide_atual < 0 ? this.slides.length - 1 : slide_atual;
            this.clearSlides();
            this.previousSlide(slide_atual);
        });
    }
}
