import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { SuggectionDetailsComponent } from './suggection-details/suggection-details.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    FormComponent,
    SuggectionDetailsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule,
  ReactiveFormsModule
  ]
})
export class SuggestionsModule { }
