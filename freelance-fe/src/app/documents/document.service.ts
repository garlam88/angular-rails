import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { Document } from './document';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:4201/freelance_documents';

  constructor(
    private http: HttpClient
  ) {}

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(this.documentsUrl)
  }

}