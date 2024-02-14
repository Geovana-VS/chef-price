import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarListaDeComprasComponent } from './criar-lista-de-compras.component';

describe('CriarListaDeComprasComponent', () => {
  let component: CriarListaDeComprasComponent;
  let fixture: ComponentFixture<CriarListaDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarListaDeComprasComponent]
    });
    fixture = TestBed.createComponent(CriarListaDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
