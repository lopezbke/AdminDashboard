import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuBottomComponent } from './navigation-menu-bottom.component';

describe('NavigationMenuBottomComponent', () => {
  let component: NavigationMenuBottomComponent;
  let fixture: ComponentFixture<NavigationMenuBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMenuBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
