import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Fact {
  text: string;
  img: string;
}

@Component({
  selector: 'app-random-facts',
  imports: [CommonModule],
  templateUrl: './random-facts.component.html',
  styleUrl: './random-facts.component.css'
})
export class RandomFactsComponent {
facts: Fact[] = [
    { text: "Bananas are berries.", img: "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg" },
    { text: "Octopuses have three hearts.", img: "https://images.pexels.com/photos/8352399/pexels-photo-8352399.jpeg" },
    { text: "Honey never spoils.", img: "https://images.pexels.com/photos/302163/pexels-photo-302163.jpeg" },
    { text: "Butterflies taste with their feet.", img: "https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg" },
    { text: "Tomatoes are fruits.", img: "https://images.pexels.com/photos/53588/tomatoes-vegetables-food-frisch-53588.jpeg" },
    { text: "Sea otters hold hands while sleeping.", img: "https://images.pexels.com/photos/12227432/pexels-photo-12227432.jpeg" },
    { text: "Jellyfish are 95% water.", img: "https://images.pexels.com/photos/2698871/pexels-photo-2698871.jpeg" },
    { text: "Koalas sleep 20 hours daily.", img: "https://images.pexels.com/photos/1770706/pexels-photo-1770706.jpeg" },
    { text: "Hummingbirds fly backward.", img: "https://images.pexels.com/photos/705314/pexels-photo-705314.jpeg" },
    { text: "Sloths can hold breath 40 minutes.", img: "https://images.pexels.com/photos/26108705/pexels-photo-26108705.jpeg" },
    { text: "Penguins propose with pebbles.", img: "https://images.pexels.com/photos/689784/pexels-photo-689784.jpeg" },
    { text: "Elephants can’t jump.", img: "https://images.pexels.com/photos/34780209/pexels-photo-34780209.jpeg" },
    { text: "Sharks don’t have bones.", img: "https://images.pexels.com/photos/31745220/pexels-photo-31745220.jpeg" },
    { text: "There are more stars than grains of sand.", img: "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg" }
  ];

 currentFact: Fact | null = null;
animateImage = false;
animateText = false;

getRandomFact(): void {
  const randomIndex = Math.floor(Math.random() * this.facts.length);
  this.currentFact = this.facts[randomIndex];

  // trigger animation
  this.animateText = false;
  setTimeout(() => {
    this.animateText = true;
  }, 0);

  this.animateImage = false;
  setTimeout(() => this.animateImage = true, 0);
}}
