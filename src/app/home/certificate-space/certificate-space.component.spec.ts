import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateSpaceComponent } from './certificate-space.component';

describe('CertificateSpaceComponent', () => {
  let component: CertificateSpaceComponent;
  let fixture: ComponentFixture<CertificateSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateSpaceComponent]
    });
    fixture = TestBed.createComponent(CertificateSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
