import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCardComponent } from './aluno-card.component';

describe('AlunoCardComponent', () => {
  let component: AlunoCardComponent;
  let fixture: ComponentFixture<AlunoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoCardComponent]
    });
    fixture = TestBed.createComponent(AlunoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
