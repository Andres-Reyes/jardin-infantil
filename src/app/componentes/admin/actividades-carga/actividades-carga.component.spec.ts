import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCargaComponent } from './actividades-carga.component';

describe('ActividadesCargaComponent', () => {
  let component: ActividadesCargaComponent;
  let fixture: ComponentFixture<ActividadesCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
