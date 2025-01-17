import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Welcome {{ name }}</h2>
      <!-- <h2>{{ calculateSum(2, 2) }}</h2> -->

      <input
        [id]="myId"
        bind-disabled="isDisabled"
        type="text"
        value="Jaimin"
      />
      <input
        id="{{ myId }}"
        [disabled]="isDisabled"
        type="text"
        value="Jaimin"
      />
    </div>
  `,
  styles: [],
})
export class TestComponent {
  name: string = 'Guest';

  public myId: string = 'testId';

  public isDisabled: boolean = false;

  calculateSum(a: number, b: number): number {
    return a + b;
  }
}
