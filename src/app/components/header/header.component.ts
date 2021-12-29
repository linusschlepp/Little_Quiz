import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: String){
    console.log("Route"+route);
    if (this.router.url === route)
      console.log("Yes")
      else
      console.log("no")
    console.log("Eigentliche Route"+this.router.url)
    return this.router.url === route;
  }

}
