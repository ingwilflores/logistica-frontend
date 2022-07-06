import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocalizacionEntradaComponent } from './add-localizacionEntrada.component';

describe('AddLocalizacionEntradaComponent', () => {
  let component: AddLocalizacionEntradaComponent;
  let fixture: ComponentFixture<AddLocalizacionEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocalizacionEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocalizacionEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
