import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/shared/app.service';

import { page } from './single.page';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent {

  public page = page;
  id: string | undefined;
  
  constructor(private appService: AppService, private route: ActivatedRoute) { 
    appService.setPage(page);
  }

  ngOnInit() {
  
    this.route.queryParams
      .subscribe(params => {
        //console.log(params); // { orderby: "price" }
        this.id = params['id'];
      }
    );
    
  }

}
