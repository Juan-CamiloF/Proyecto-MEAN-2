import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajesGlobalesComponent } from './puntajes-globales.component';

describe('PuntajesGlobalesComponent', () => {
  let component: PuntajesGlobalesComponent;
  let fixture: ComponentFixture<PuntajesGlobalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntajesGlobalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajesGlobalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
