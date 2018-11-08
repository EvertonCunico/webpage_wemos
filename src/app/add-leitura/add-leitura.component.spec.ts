import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeituraComponent } from './add-leitura.component';

describe('AddLeituraComponent', () => {
  let component: AddLeituraComponent;
  let fixture: ComponentFixture<AddLeituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
