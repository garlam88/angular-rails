import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from './document';
import { DocumentService } from './document.service';
import { timer } from 'rxjs';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.scss'],
  providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService,
  ) {}

  ngOnInit() {
    let source = timer(0, 5000);
    source.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
}
