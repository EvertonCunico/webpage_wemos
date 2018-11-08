import { TestBed } from '@angular/core/testing';

import { LeituraService } from './leitura.service';

describe('LeituraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeituraService = TestBed.get(LeituraService);
    expect(service).toBeTruthy();
  });
});
