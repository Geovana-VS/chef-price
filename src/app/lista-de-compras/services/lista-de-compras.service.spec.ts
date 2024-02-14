import { TestBed } from '@angular/core/testing';

import { ListaDeComprasService } from './lista-de-compras.service';

describe('ListaDeComprasService', () => {
  let service: ListaDeComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDeComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
