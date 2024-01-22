import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseDeCustosComponent } from './analise-de-custos.component';

describe('AnaliseDeCustosComponent', () => {
  let component: AnaliseDeCustosComponent;
  let fixture: ComponentFixture<AnaliseDeCustosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnaliseDeCustosComponent]
    });
    fixture = TestBed.createComponent(AnaliseDeCustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
