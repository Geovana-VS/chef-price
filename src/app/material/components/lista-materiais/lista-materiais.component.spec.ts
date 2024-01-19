import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMateriaisComponent } from './lista-materiais.component';

describe('ListaMateriaisComponent', () => {
  let component: ListaMateriaisComponent;
  let fixture: ComponentFixture<ListaMateriaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaMateriaisComponent]
    });
    fixture = TestBed.createComponent(ListaMateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
