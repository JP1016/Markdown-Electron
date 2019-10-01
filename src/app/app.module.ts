import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppConfig } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { MarkupComponent } from './markup/markup.component';
import { AddEmojiComponent } from './add-emoji/add-emoji.component';
import { OptionsDialogComponent } from './options-dialog/options-dialog.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { LoadDialogComponent } from './load-dialog/load-dialog.component';
import { MatDialogModule, MatTooltipModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { IconsModule } from './icons/icons.module';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { IndexedDBModule } from 'ng-indexed-db';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NtkmeButtonModule } from "@ctrl/ngx-github-buttons";
import { AngularSplitModule } from "angular-split";
import { MarkdownModule } from "ngx-markdown";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: AppConfig.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
