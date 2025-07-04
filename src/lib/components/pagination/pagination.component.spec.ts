import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ForAngularModule } from 'src/lib/for-angular.module';
import { PaginationComponent } from './pagination.component';
import { NgxRenderingEngine2 } from 'src/lib/engine';
import { Model, ModelBuilderFunction } from '@decaf-ts/decorator-validation';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { consoleWarn } from 'src/lib/helpers';


const imports = [
  ForAngularModule,
  PaginationComponent,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useClass: TranslateFakeLoader
    }
  })
];

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  let engine;

  beforeAll(() => {
    try {
      engine = new NgxRenderingEngine2();
      Model.setBuilder(Model.fromModel as ModelBuilderFunction);
    } catch (e: unknown) {
      consoleWarn(this, `Engine already loaded`);
    }
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports,
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
