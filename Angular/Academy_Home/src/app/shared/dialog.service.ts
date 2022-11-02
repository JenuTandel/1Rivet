import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

@Injectable()
export class DialogService {
  public closeDialog :Subject<boolean>
  constructor(private overlay: Overlay) {
    this.closeDialog = new Subject();
  }
  openDialog(component: any) {
    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'overlay-backdrop',
      hasBackdrop: true,
      panelClass: 'overlay-panel',
    });

    const portal = new ComponentPortal(component);
    overlayRef.attach(portal);
    // Close the dialog using backdropClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach()
    })

    this.closeDialog.subscribe(()=>{
      overlayRef.detach();
    })
  }
}
