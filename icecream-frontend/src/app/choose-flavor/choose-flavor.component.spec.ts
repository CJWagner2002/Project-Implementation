import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFlavorComponent } from './choose-flavor.component';

describe('ChooseFlavorComponent', () => {
  let component: ChooseFlavorComponent;
  let fixture: ComponentFixture<ChooseFlavorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseFlavorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
