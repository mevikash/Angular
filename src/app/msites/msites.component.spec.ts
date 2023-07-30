import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsitesComponent } from './msites.component';

describe('MsitesComponent', () => {
  let component: MsitesComponent;
  let fixture: ComponentFixture<MsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
