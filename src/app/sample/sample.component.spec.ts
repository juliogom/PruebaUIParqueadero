import { async, ComponentFixture, TestBed,ComponentFixtureAutoDetect } from '@angular/core/testing';

import { SampleComponent } from './sample.component';
import {DatosServices} from '../Services/DatosServices.service';

TestBed.configureTestingModule({
 declarations: [ SampleComponent ],
 providers: [
   { provide: ComponentFixtureAutoDetect, useValue: true }
 ]
});

describe('Service : DatosServices',()=>{
  //Variable declarations
  let service;

  beforeEach(()=>{
      service=new DatosServices();
    });

    it('Prueba Servicio',()=>{
      expect(service.getName()).toEqual("Julio");
    });
});


describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
