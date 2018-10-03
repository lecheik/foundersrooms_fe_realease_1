import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWizardComponent } from './second-wizard.component';

describe('SecondWizardComponent', () => {
  let component: SecondWizardComponent;
  let fixture: ComponentFixture<SecondWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
