import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  imgs: string[] = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg'];
  currentindex: number = 0;
  radioselectedstyle = {
    border: '1px solid blue',
    borderRadius: '50%',
  };

  // sets current to next img
  gonext() {
    if (this.currentindex == this.imgs.length - 1) this.currentindex = 0;
    else this.currentindex++;
  }

  goprevious() {
    if (this.currentindex == 0) this.currentindex = 2;
    else this.currentindex--;
  }

  goindex(index: number) {
    this.currentindex = index;
  }
}
