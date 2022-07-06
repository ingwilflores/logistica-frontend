import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocalizacionEntradaComponent } from './edit-localizacionEntrada.component';

describe('EditLocalizacionEntradaComponent', () => {
  let component: EditLocalizacionEntradaComponent;
  let fixture: ComponentFixture<EditLocalizacionEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLocalizacionEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocalizacionEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
