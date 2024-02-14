import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarListaComponent } from './comprar-lista.component';

describe('ComprarListaComponent', () => {
  let component: ComprarListaComponent;
  let fixture: ComponentFixture<ComprarListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarListaComponent]
    });
    fixture = TestBed.createComponent(ComprarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
