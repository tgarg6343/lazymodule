import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrrraComponent } from './extrrra.component';

describe('ExtrrraComponent', () => {
  let component: ExtrrraComponent;
  let fixture: ComponentFixture<ExtrrraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrrraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrrraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
