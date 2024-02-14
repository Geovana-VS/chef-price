import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeComprasPorReceitaComponent } from './lista-de-compras-por-receita.component';

describe('ListaDeComprasPorReceitaComponent', () => {
  let component: ListaDeComprasPorReceitaComponent;
  let fixture: ComponentFixture<ListaDeComprasPorReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeComprasPorReceitaComponent]
    });
    fixture = TestBed.createComponent(ListaDeComprasPorReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
