import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseToppingComponent } from './choose-topping.component';

describe('ChooseToppingComponent', () => {
  let component: ChooseToppingComponent;
  let fixture: ComponentFixture<ChooseToppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseToppingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
