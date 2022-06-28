import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, limit, query, startAt, orderBy, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

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
  perPage: number = 3;
  pageNumber: number = 0;
  totalLength: number = 0;
  projects$: Observable<Project[]>;
  lastTitle: string = "";

  constructor(public firestore: Firestore) {
    this.projects$ = new Observable<Project[]>();
    this.getItems();
  }

  public cyclePage(event:PageEvent): PageEvent{
    this.pageNumber = event.pageIndex;
    this.perPage = event.pageSize;
    this.getItems();
    return event;
  }

  async getItems(){
    //get total count
    let e: any = collection(this.firestore, "portfolio");
    const totalSnap = await getDocs(e);
    this.totalLength = totalSnap.size + 1;

    if(this.pageNumber === 0){
      let table: any = query(collection(this.firestore, 'portfolio'), orderBy("title"), limit(this.perPage));
      this.projects$ = collectionData(table);
    } else {
      let table: any = query(collection(this.firestore, 'portfolio'), orderBy("title"), limit(this.perPage * (this.pageNumber + 1)));
      const snapShot = await getDocs(table);
      let i = 0;
      snapShot.forEach((doc) => {
        const data: any = doc.data();
        if(i === ((this.perPage * this.pageNumber) - 1)){
          //console.log(data.title);
          //this.lastTitle = data.title;
          let table: any = query(collection(this.firestore, 'portfolio'), orderBy("title"), limit(this.perPage), startAt(data.title));
          this.projects$ = collectionData(table);
        }
        i++;
      })
    }
  }

  ngOnInit(): void { }

}
