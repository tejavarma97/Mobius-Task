import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any;
data:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private http:HttpClient) {
    this.user=this.router.getCurrentNavigation().extras.state;
}

ngOnInit() {
  this.http.get(`https://api.github.com/users/${this.user}`).subscribe(res=>{
    this.data = res;
    console.log(this.data)
    
  })
}

}
