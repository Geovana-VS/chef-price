import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarReceitaComponent } from './criar-receita.component';

describe('CriarReceitaComponent', () => {
  let component: CriarReceitaComponent;
  let fixture: ComponentFixture<CriarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarReceitaComponent]
    });
    fixture = TestBed.createComponent(CriarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
