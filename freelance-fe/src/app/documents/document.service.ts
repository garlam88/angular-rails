import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Document } from './document';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:4201/freelance_documents.json';

  constructor(
    private http: HttpClient
  ) {}

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsUrl)
                    /** .map((response: HttpResponse) => <Document[]>response.json())
                    .pipe(catchError(this.handleError) **/;
  }

  private handleError (error: HttpErrorResponse | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(errMsg);
  }

}