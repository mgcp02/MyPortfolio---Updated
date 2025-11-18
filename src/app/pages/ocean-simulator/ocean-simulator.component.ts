import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-ocean-cleanup',
  templateUrl: './ocean-simulator.component.html',
  styleUrls: ['./ocean-simulator.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OceanCleanupComponent implements AfterViewInit {

  @ViewChildren('trash') trashElements!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('fishContainer', { static: false }) fishContainer!: ElementRef;

  trashItems = [
    { id: 'trash1', emoji: '🧃' },
    { id: 'trash2', emoji: '🍾' },
    { id: 'trash3', emoji: '🥤' },
    { id: 'trash4', emoji: '🛍️' },
    { id: 'trash5', emoji: '🧃' },
    { id: 'trash6', emoji: '🍾' },
    { id: 'trash7', emoji: '🛍️' },
    { id: 'trash8', emoji: '🥤' }
  ];

  remainingTrash = this.trashItems.length;

ngAfterViewInit(): void {
  // wait for trash elements to render
  setTimeout(() => {
    this.trashElements.forEach(trashEl => this.placeTrashRandomly(trashEl.nativeElement));
  });
}


  placeTrashRandomly(trash: HTMLElement) {
    const container = document.getElementById('ocean')!;
    const margin = 150;
    const x = Math.random() * (container.clientWidth - margin * 2) + margin;
    const y = Math.random() * (container.clientHeight - margin * 2) + margin;

    trash.style.position = 'absolute';
    trash.style.left = x + 'px';
    trash.style.top = y + 'px';
  }

  onDragStart(event: DragEvent) {
    const target = event.target as HTMLElement;
    event.dataTransfer?.setData('text/plain', target.id);
    target.classList.add('dragging');
  }

  onDragEnd(event: DragEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('dragging');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  
  onDrop(event: DragEvent) {
    const dragged = document.querySelector('.dragging') as HTMLElement;
    if (dragged) {
      dragged.style.display = 'none';
      this.remainingTrash--;

      const bin = document.getElementById('bin')!;
      bin.textContent = 'Nice! ♻️';
      setTimeout(() => bin.textContent = '🗑️ Drop Trash Here', 800);

      document.getElementById('ocean')!.style.filter = 'brightness(1.12)';

      if (this.remainingTrash === 0) {
        this.showCelebration();
      }
    }
  }
   

  showCelebration() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.fontSize = '2rem';
    container.style.color = '#fff';
    container.style.background = 'rgba(0, 0, 0, 0.7)';
    container.style.padding = '20px 40px';
    container.style.borderRadius = '15px';
    container.style.textAlign = 'center';
    container.style.zIndex = '10000';

    const message = document.createElement('div');
    message.textContent = '🎉 Thank you for cleaning the ocean! 🌊';
    container.appendChild(message);

    const restart = document.createElement('div');
    restart.textContent = 'Click here to restart';
    restart.style.fontSize = '1rem';
    restart.style.marginTop = '10px';
    restart.style.cursor = 'pointer';
    restart.style.textDecoration = 'underline';
    restart.style.color = 'white';
    restart.addEventListener('click', () => location.reload());
    container.appendChild(restart);

    document.body.appendChild(container);

    const duration = 2 * 1000;
    const end = Date.now() + duration;


  const confettiInterval = () => {
    confetti({
      particleCount: 20,
      spread: 70,
      origin: { x: Math.random(), y: Math.random() * 0.6 },
      zIndex: 10001,
    });
    if (Date.now() < end) {
      requestAnimationFrame(confettiInterval);
    }
  };
    confettiInterval();
  }
}
