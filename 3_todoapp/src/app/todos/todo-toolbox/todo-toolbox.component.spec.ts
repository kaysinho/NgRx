import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoToolboxComponent } from './todo-toolbox.component';

describe('TodoToolboxComponent', () => {
  let component: TodoToolboxComponent;
  let fixture: ComponentFixture<TodoToolboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoToolboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
