import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  imgs: string[] = ['imgs/p1.png', 'imgs/p2.png', 'imgs/p3.jpg', 'imgs/p5.png'];
  currentindex = signal<number>(0);
  radioselectedstyle = {
    border: '1px solid blue',
    borderRadius: '50%',
  };
  Timerobj?: any = null;

  ngAfterViewInit() {
    this.StartSlideShow();
  }

  // sets current to next img

  gonext(flag: boolean) {
    if (this.currentindex() == this.imgs.length - 1) this.currentindex.set(0);
    else this.currentindex.update((val) => val + 1);
    if (flag) this.StopSlideShow();
  }

  goprevious(flag: boolean) {
    if (this.currentindex() == 0) this.currentindex.set(this.imgs.length - 1);
    else this.currentindex.update((val) => val - 1);
    if (flag) this.StopSlideShow();
  }

  goindex(index: number) {
    this.currentindex.set(index);
  }

  StartSlideShow() {
    this.Timerobj = setInterval(() => {
      this.gonext(false);
    }, 1000);
  }

  StopSlideShow() {
    if (this.Timerobj != null) clearInterval(this.Timerobj);
  }
}
