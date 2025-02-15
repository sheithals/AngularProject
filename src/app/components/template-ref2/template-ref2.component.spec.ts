import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRef2Component } from './template-ref2.component';

describe('TemplateRef2Component', () => {
  let component: TemplateRef2Component;
  let fixture: ComponentFixture<TemplateRef2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRef2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRef2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
