import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLibrosComponent } from './create-libros.component';

describe('CreateLibrosComponent', () => {
  let component: CreateLibrosComponent;
  let fixture: ComponentFixture<CreateLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
