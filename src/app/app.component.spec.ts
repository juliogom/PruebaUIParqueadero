
describe('Sample Test', () => {
 it('true is true', () => expect(true).toBe(true));
});

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    this.app = new AppComponent();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should have hello property', async(() => {
    expect(this.app.title).toBe('app');
  }));

});
