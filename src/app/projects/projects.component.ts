import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Project {
  title: string,
  description: string,
  tags: string[],
  url: string
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project$: Observable<Project[]>;
  constructor(firestore: Firestore) {
    const table: any = collection(firestore, 'portfolio');
    this.project$ = collectionData(table);
  }

  ngOnInit(): void {

  }

}
