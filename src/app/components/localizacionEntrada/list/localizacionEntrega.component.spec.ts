import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacionEntregaComponent } from './localizacionEntrega.component';

describe('LocalizacionEntregaComponent', () => {
  let component: LocalizacionEntregaComponent;
  let fixture: ComponentFixture<LocalizacionEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizacionEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacionEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
