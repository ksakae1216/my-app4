import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { browser, element, by } from 'protractor';

describe('LoginService', () => {

  beforeEach(() => TestBed.configureTestingModule({ 
    imports: [ RouterTestingModule ],
  }));

  it('can login', () => {
    browser.get('/login');
    // const loginId = element(by.id('loginId'));
    const loginId = element.all(by.tagName('input')).get(0);
    expect(loginId.getText()).toEqual('');
    
  });

});
