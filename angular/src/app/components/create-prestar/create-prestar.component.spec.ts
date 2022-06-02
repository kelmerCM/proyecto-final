import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrestarComponent } from './create-prestar.component';

describe('CreatePrestarComponent', () => {
  let component: CreatePrestarComponent;
  let fixture: ComponentFixture<CreatePrestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrestarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
