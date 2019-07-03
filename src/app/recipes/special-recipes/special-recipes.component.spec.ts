import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRecipesComponent } from './special-recipes.component';

describe('SpecialRecipesComponent', () => {
  let component: SpecialRecipesComponent;
  let fixture: ComponentFixture<SpecialRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
