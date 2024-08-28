import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeComprasComponent } from './historico-de-compras.component';

describe('HostoricoDeComprasComponent', () => {
  let component: HistoricoDeComprasComponent;
  let fixture: ComponentFixture<HistoricoDeComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoDeComprasComponent]
    });
    fixture = TestBed.createComponent(HistoricoDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
