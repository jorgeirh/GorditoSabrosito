class Slider{
  constructor(sliderId){
    this.sliderImages = document.querySelectorAll(`#${sliderId} .slide`);
    this.arrowLeft = document.querySelector(`#${sliderId} .arrow-left`);
    this.arrowRight = document.querySelector(`#${sliderId} .arrow-right`);
    this.current = 0;
    console.log(this.sliderImages);
  }
  reset(){
    for(let i = 0; i < this.sliderImages.length; i++){
      this.sliderImages[i].style.display = 'none';
    }
  }




  //Inicia slider
  startSlide(){
    this.reset();
    this.sliderImages[0].style.display = 'block';

    this.arrowLeft.addEventListener('click', function(){
      console.log(this, self.sliderImages);
      if(this.current === 0){
        this.current = this.sliderImages.length;
      }
      this.slideLeft();
    });

    this.arrowRight.addEventListener('click', function(){
      if(this.current === this.sliderImages.length - 1){
        this.current = -1
      }
      this.slideRight();
    }, false);

    setInterval(() => {
      this.arrowRight.click();
    }, 5000);
  }

  //Muestra anterior
  slideLeft(){
    this.reset();
    this.sliderImages[this.current - 1].style.display = 'block';
    this.current--;
  }

  //Muestra Siguiente
  slideRight() {
    this.reset();
    this.sliderImages[this.current + 1].style.display = 'block';
    this.current++;
  }


}
let sliderPrincipal = new Slider('sliderPrincipal');
  sliderPrincipal.startSlide();
