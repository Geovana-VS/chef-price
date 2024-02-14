import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeItemListaComponent } from './formulario-de-item-lista.component';

describe('FormularioDeItemListaComponent', () => {
  let component: FormularioDeItemListaComponent;
  let fixture: ComponentFixture<FormularioDeItemListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeItemListaComponent]
    });
    fixture = TestBed.createComponent(FormularioDeItemListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
