import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'jfjdfj',
      file_url: 'http://google.com',
      updated_at: '03/13/2019',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Second Doc",
      description: 'jfjdfj',
      file_url: 'http://google.com',
      updated_at: '03/13/2019',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Third Doc",
      description: 'jfjdfj',
      file_url: 'http://google.com',
      updated_at: '03/13/2019',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}
