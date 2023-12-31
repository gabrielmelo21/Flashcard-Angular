import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {ComponentRoutingModule} from "./component-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {PainelModule} from "./painel/painel.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import { ExpressionGeneratorComponent } from './expression-generator/expression-generator.component';
import { FrequencyComponent } from './frequency/frequency.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { PracticeComponent } from './practice/practice.component';
import { TradutorComponent } from './tradutor/tradutor.component';
import { PhrsalVerbsComponent } from './phrsal-verbs/phrsal-verbs.component';
@NgModule({
  declarations: [
  HomeComponent,
  ExpressionGeneratorComponent,
  FrequencyComponent,
  PracticeComponent,
  TradutorComponent,
  PhrsalVerbsComponent,

  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatButtonModule,
    MatIconModule,
    PainelModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatRippleModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule

  ]
})
export class ComponentsModule { }
