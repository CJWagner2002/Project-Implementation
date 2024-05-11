import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBowlComponent } from './choose-bowl.component';

describe('ChooseBowlComponent', () => {
  let component: ChooseBowlComponent;
  let fixture: ComponentFixture<ChooseBowlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseBowlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseBowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
