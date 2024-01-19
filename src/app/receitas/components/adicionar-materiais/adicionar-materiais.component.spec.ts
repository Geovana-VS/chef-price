import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarMateriaisComponent } from './adicionar-materiais.component';

describe('AdicionarMateriaisComponent', () => {
  let component: AdicionarMateriaisComponent;
  let fixture: ComponentFixture<AdicionarMateriaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarMateriaisComponent]
    });
    fixture = TestBed.createComponent(AdicionarMateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
