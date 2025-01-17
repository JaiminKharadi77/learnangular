import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Welcome {{ name }}</h2>
      <!-- <h2>{{ calculateSum(2, 2) }}</h2> -->
    </div>
  `,
  styles: [],
})
export class TestComponent {
  name: string = 'Guest';

  

  calculateSum(a: number, b: number): number {
    return a + b;
  }
}
