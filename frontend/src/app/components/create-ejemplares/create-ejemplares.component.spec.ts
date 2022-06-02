import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEjemplaresComponent } from './create-ejemplares.component';

describe('CreateEjemplaresComponent', () => {
  let component: CreateEjemplaresComponent;
  let fixture: ComponentFixture<CreateEjemplaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEjemplaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEjemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
