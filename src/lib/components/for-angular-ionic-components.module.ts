import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CrudFieldComponent } from "./crud-field/crud-field.component";
import { CrudFormComponent } from "./crud-form/crud-form.component";
import { ForAngularIonicModule } from "../for-angular-ionic.module";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { EmptyStateComponent } from "./empty-state/empty-state.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { ListComponent } from "./list/list.component";

const Components = [
  CrudFieldComponent,
  CrudFormComponent,
  EmptyStateComponent,
  ListComponent,
  ListItemComponent,
  SearchbarComponent,
  PaginationComponent,
  CrudFormComponent,
];

@NgModule({
  imports: Components,
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [Components, ForAngularIonicModule],
})
export class ForAngularIonicComponentsModule {}
