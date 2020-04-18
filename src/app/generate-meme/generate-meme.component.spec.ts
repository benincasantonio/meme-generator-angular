import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMemeComponent } from './generate-meme.component';

describe('GenerateMemeComponent', () => {
  let component: GenerateMemeComponent;
  let fixture: ComponentFixture<GenerateMemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateMemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
