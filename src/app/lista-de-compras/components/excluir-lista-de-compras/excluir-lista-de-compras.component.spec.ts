import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirListaDeComprasComponent } from './excluir-lista-de-compras.component';

describe('ExcluirListaDeComprasComponent', () => {
  let component: ExcluirListaDeComprasComponent;
  let fixture: ComponentFixture<ExcluirListaDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirListaDeComprasComponent]
    });
    fixture = TestBed.createComponent(ExcluirListaDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
