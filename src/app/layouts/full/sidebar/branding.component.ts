import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/logo1.svg"
          class="align-middle m-2"
          alt="logo" width="200" height="200"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
