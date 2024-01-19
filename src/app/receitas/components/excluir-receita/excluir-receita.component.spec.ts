import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirReceitaComponent } from './excluir-receita.component';

describe('ExcluirReceitaComponent', () => {
  let component: ExcluirReceitaComponent;
  let fixture: ComponentFixture<ExcluirReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirReceitaComponent]
    });
    fixture = TestBed.createComponent(ExcluirReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
