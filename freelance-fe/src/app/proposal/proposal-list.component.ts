import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.scss'],
  providers: [ ProposalService ]
})
export class ProposalListComponent implements OnInit {
  errorMessage: string;
  mode = "Observable";
  proposals: Proposal[]; 

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit() {
    let source = timer(0, 5000);
    source.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals
        );
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }

}