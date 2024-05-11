import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseConeComponent } from './choose-cone.component';

describe('ChooseConeComponent', () => {
  let component: ChooseConeComponent;
  let fixture: ComponentFixture<ChooseConeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseConeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseConeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
