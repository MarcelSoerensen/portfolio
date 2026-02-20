import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-whyMe',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './whyMe.component.html',
  styleUrls: ['./whyMe.component.scss'],
})
export class WhyMeComponent implements OnInit, OnDestroy {
  iAmText = '';
  myStatusText = '';
  tripplePointText = '';
  iconVisible = false;
  cursorBlink = false;
  cursorVisible = true;
  private animationInterval: any;
  private blinkInterval: any;
  private destroy = false;
  private langSub: any;
  animationSteps = [
    { icon: 'assets/icons/location.svg', locationKey: 'whyMe.located' },
    { icon: 'assets/icons/remote.svg', locationKey: 'whyMe.remote' },
    { icon: 'assets/icons/travel.svg', locationKey: 'whyMe.relocade' },
  ];
  currentStep = 0;
  iconSrc = this.animationSteps[0].icon;

  constructor(private transloco: TranslocoService) {}

  ngOnInit() {
    this.startAnimation();
    this.langSub = this.transloco.langChanges$.subscribe(() => {
      this.destroy = true;
      clearInterval(this.animationInterval);
      clearInterval(this.blinkInterval);
      setTimeout(() => {
        this.destroy = false;
        this.startAnimation();
      }, 50);
    });
  }

  ngOnDestroy() {
    this.destroy = true;
    clearInterval(this.animationInterval);
    clearInterval(this.blinkInterval);
    if (this.langSub) this.langSub.unsubscribe();
  }

  private async startAnimation() {
    while (!this.destroy) {
      this.iconVisible = false;
      await this.wait(1000);
      this.iconVisible = true;
      const iAm = this.transloco.translate('whyMe.iAm');
      const location = this.transloco.translate(
        this.animationSteps[this.currentStep].locationKey,
      );
      const tripplePoint = this.transloco.translate('whyMe.tripplePoint');
      this.iconSrc = this.animationSteps[this.currentStep].icon;
      await this.wait(500);

      this.cursorVisible = true;
      await this.blinkCursor(1);
      await this.animateStatusTyping(iAm, location, tripplePoint, 1);
      await this.blinkCursor(2);
      await this.animateStatusTyping(iAm, location, tripplePoint, -1);

      this.iconVisible = false;
      this.cursorVisible = false;

      await this.wait(500);
      this.currentStep = (this.currentStep + 1) % this.animationSteps.length;
    }
  }

  private animateStatusTyping(
    iAm: string,
    location: string,
    tripplePoint: string,
    direction: 1 | -1,
  ): Promise<void> {
    return new Promise((resolve) => {
      const full = iAm + location + tripplePoint;
      const lenIAm = iAm.length;
      const lenLoc = location.length;
      let n = direction === 1 ? 0 : full.length;
      clearInterval(this.animationInterval);
      this.animationInterval = setInterval(
        () => {
          if (this.destroy) return;
          if (
            (direction === 1 && n > full.length) ||
            (direction === -1 && n < 0)
          ) {
            clearInterval(this.animationInterval);
            resolve();
            return;
          }
          const current = direction === 1 ? n : n - 1;
          const str = full.substring(0, Math.max(0, current));
          this.iAmText = str.substring(0, Math.min(lenIAm, str.length));
          this.myStatusText =
            str.length > lenIAm
              ? str.substring(lenIAm, Math.min(lenIAm + lenLoc, str.length))
              : '';
          this.tripplePointText =
            str.length > lenIAm + lenLoc
              ? str.substring(lenIAm + lenLoc, str.length)
              : '';
          n += direction;
        },
        direction === 1 ? 50 : 30,
      );
    });
  }

  private blinkCursor(times: number): Promise<void> {
    return new Promise((resolve) => {
      let count = 0;
      this.cursorBlink = true;
      clearInterval(this.blinkInterval);
      this.blinkInterval = setInterval(() => {
        if (this.destroy) return;
        this.cursorBlink = !this.cursorBlink;
        if (!this.cursorBlink) count++;
        if (count >= times * 2) {
          clearInterval(this.blinkInterval);
          this.cursorBlink = false;
          resolve();
        }
      }, 350);
    });
  }

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
