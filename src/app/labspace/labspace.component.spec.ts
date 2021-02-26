import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabspaceComponent } from './labspace.component';

describe('LabspaceComponent', () => {
  let component: LabspaceComponent;
  let fixture: ComponentFixture<LabspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
