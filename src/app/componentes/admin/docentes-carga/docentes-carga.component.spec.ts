import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesCargaComponent } from './docentes-carga.component';

describe('DocentesCargaComponent', () => {
  let component: DocentesCargaComponent;
  let fixture: ComponentFixture<DocentesCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
