import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacyOverlay.component.html',
  styleUrls: ['./privacyOverlay.component.scss', '../legalAndPrivacy.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrivacyOverlayComponent {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();
  close() {
    this.closed.emit();
  }
}

