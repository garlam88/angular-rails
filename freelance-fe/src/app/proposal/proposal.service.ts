import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:4202/proposals';

  constructor(
    private http: HttpClient
  ) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(this.proposalsUrl);
  }

  getProposal(id: number): Observable<Proposal> {
    return this.http.get<Proposal>(this.proposalsUrl + "/" + id);
  }

  createProposal(proposal) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let httpOptions = { headers: headers };

    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), httpOptions)
                    .pipe(map((res: Response) => res));
  }
}

