import { Component, Input, Output, EventEmitter, type ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isVisible = false;
  @Output() closed = new EventEmitter<void>();
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('mascara') mascara!: ElementRef;

  closeModal() {
    this.closed.emit();
  }
}
