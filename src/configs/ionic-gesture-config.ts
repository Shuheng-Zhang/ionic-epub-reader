import { HammerGestureConfig } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class IonicGestureConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement) {
        const mc = new (window as any).Hammer(element);
        for (const eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    }
}
