import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() isModalActive = new EventEmitter<boolean>();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  hideModal(): void{
    this.isModalActive.emit(false);
  }
}
