import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeCompraComponent } from './lista-de-compra.component';

describe('ListaDeCompraComponent', () => {
  let component: ListaDeCompraComponent;
  let fixture: ComponentFixture<ListaDeCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeCompraComponent]
    });
    fixture = TestBed.createComponent(ListaDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
