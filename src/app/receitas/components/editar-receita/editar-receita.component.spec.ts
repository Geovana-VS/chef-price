import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReceitaComponent } from './editar-receita.component';

describe('EditarReceitaComponent', () => {
  let component: EditarReceitaComponent;
  let fixture: ComponentFixture<EditarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReceitaComponent]
    });
    fixture = TestBed.createComponent(EditarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
