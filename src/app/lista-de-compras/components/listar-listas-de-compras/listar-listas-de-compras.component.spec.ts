import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarListasDeComprasComponent } from './listar-listas-de-compras.component';

describe('ListarListasDeComprasComponent', () => {
  let component: ListarListasDeComprasComponent;
  let fixture: ComponentFixture<ListarListasDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarListasDeComprasComponent]
    });
    fixture = TestBed.createComponent(ListarListasDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
