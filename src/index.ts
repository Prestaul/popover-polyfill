import { apply, isSupported, ORIGINAL_ATTACH_SHADOW } from './popover.js';

declare global {
  interface Element {
    [ORIGINAL_ATTACH_SHADOW](init: ShadowRootInit): ShadowRoot;
  }

  interface HTMLElement {
    popover: 'auto' | 'manual' | null;
    showPopover(): void;
    hidePopover(): void;
  }
}

if (!isSupported()) apply();
