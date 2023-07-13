export class Slider {
    private slides: HTMLDivElement[];

    private arrow_left: HTMLDivElement;
    private arrow_right: HTMLDivElement;
    
    constructor (slides: HTMLDivElement[], arrL: HTMLDivElement, arrR: HTMLDivElement) {
        this.slides = slides;
        this.arrow_left = arrL;
        this.arrow_right = arrR;
    }

    // Getters e Setters
    public get getSlider (): HTMLDivElement[] {
        return this.slides;
    }
    public get getArrowLeft (): HTMLDivElement {
        return this.arrow_left;
    }
    public get getArrowRight (): HTMLDivElement {
        return this.arrow_right;
    }

    public set setSlider (slider: HTMLDivElement[]) {
        this.slides = slider;
    }
    public set setArrowLeft (arrL: HTMLDivElement) {
        this.arrow_left = arrL;
    }
    public set setArrowRight (arrR: HTMLDivElement) {
        this.arrow_right = arrR;
    }

    // Métodos da classe

    /**Função que remove a classe active de todos os slides
    */
    private clearSlides (): void {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains('active-right')) {
                this.slides[i].classList.remove('active-right');
            } else {
                this.slides[i].classList.remove('active-left')
            }
        }
    }

    /** Função que avança um slide na página
     * @param index_slide Posição do slide que será mostrado na página
    */
    private nextSlide (index_slide: number): void {
        this.slides[index_slide].classList.add('active-right');
    }
    private previousSlide (index_slide: number): void {
        this.slides[index_slide].classList.add('active-left');
    }

    /** Função responsável pelas interações com o Slider
     */
    public slideHandler (): void {
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