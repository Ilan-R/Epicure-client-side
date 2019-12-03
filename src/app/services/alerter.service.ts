import { Injectable, NgZone } from '@angular/core';

import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlerterService {

alert(message: string) {
  this.snackBar.open(message, 'Dismiss', { duration: 2000 });;
}
  constructor(private zone: NgZone, private snackBar: MatSnackBar) { }
}
