import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'notes';
  inputElement: ElementRef;
  noteText = "";
  public isSidebarVisible: Boolean = true;

  constructor(private element: ElementRef, private renderer: Renderer2, private swUpdate: SwUpdate, private markdownService: MarkdownService) { }

  ngAfterViewInit(): void {

    this.renderer.listen(this.element.nativeElement, 'paste', (event) => {
      navigator['clipboard'].readText().then(clipText => {
        this.noteText = clipText
      });
    });

  }


  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        window.location.reload();
      });
    }

  }


}
