import { TestBed } from '@angular/core/testing';
import { ClickOutsideDirective } from './click-outside.directive';
import { ElementRef } from '@angular/core';
import { MockElementRef } from '../mocks/mock-element-ref';

describe('ClickOutsideDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }],
    }).compileComponents();
  });
  it('should create an instance', () => {
    const directive = new ClickOutsideDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
