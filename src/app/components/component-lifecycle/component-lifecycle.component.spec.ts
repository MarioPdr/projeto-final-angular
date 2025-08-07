import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleComponent } from './component-lifecycle.component';

describe('ComponentLifecycleComponent', () => {
  let component: ComponentLifecycleComponent;
  let fixture: ComponentFixture<ComponentLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLifecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
