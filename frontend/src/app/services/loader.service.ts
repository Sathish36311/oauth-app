import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingCount = 0;
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  show(): void {
    this.loadingCount++;
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.loadingCount = Math.max(this.loadingCount - 1, 0);
    if (this.loadingCount === 0) {
      this.loadingSubject.next(false);
    }
  }

  reset(): void {
    this.loadingCount = 0;
    this.loadingSubject.next(false);
  }
}
