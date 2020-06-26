import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaCargaComponent } from './cronograma-carga.component';

describe('CronogramaCargaComponent', () => {
  let component: CronogramaCargaComponent;
  let fixture: ComponentFixture<CronogramaCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronogramaCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
