import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRef3Component } from './template-ref3.component';

describe('TemplateRef3Component', () => {
  let component: TemplateRef3Component;
  let fixture: ComponentFixture<TemplateRef3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRef3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRef3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
