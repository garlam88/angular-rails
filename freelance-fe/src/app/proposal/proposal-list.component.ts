import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.scss']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'garlam@yahoo.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'garlam@yahoo.com')
  proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'garlam@yahoo.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}