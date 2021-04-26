import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajesIndividualesComponent } from './puntajes-individuales.component';

describe('PuntajesIndividualesComponent', () => {
  let component: PuntajesIndividualesComponent;
  let fixture: ComponentFixture<PuntajesIndividualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntajesIndividualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajesIndividualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
