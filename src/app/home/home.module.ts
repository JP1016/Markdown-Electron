import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { MarkupComponent } from '../markup/markup.component';
import { AddEmojiComponent } from '../add-emoji/add-emoji.component';
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';
import { LoadDialogComponent } from '../load-dialog/load-dialog.component';
import { MatDialogModule, MatTooltipModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { IconsModule } from '../icons/icons.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
import { MarkdownModule } from 'ngx-markdown';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { AngularSplitModule } from 'angular-split';
import { IndexedDBModule } from 'ng-indexed-db';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomeComponent,
    NavbarComponent,
    MarkupComponent,
    AddEmojiComponent,
    OptionsDialogComponent,
    SaveDialogComponent,
    LoadDialogComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule,
    MatDialogModule,
    IconsModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    PickerModule,
    NtkmeButtonModule,
    MarkdownModule.forRoot(),
    KeyboardShortcutsModule.forRoot(),
    AngularSplitModule.forRoot(),
    IndexedDBModule.forRoot([
      {
        name: "markdown_db",
        stores: [{ name: "markdown_store" }]
      }
    ]),],
  entryComponents: [
    AddEmojiComponent,
    OptionsDialogComponent,
    SaveDialogComponent,
    LoadDialogComponent
  ]
})
export class HomeModule { }
