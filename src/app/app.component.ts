import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   data:any=[];
   total_count:any;
   searchForm:FormGroup;

constructor( private fb:FormBuilder,private http:HttpClient,private router:Router){}

 ngOnInit() {
  this.searchForm =this.fb.group({
    search : [''],
  })
 }



  search_click(){
    console.log(this.searchForm.value)
    let searchvalue=this.searchForm.controls.search.value;
  this.http.get(`https://api.github.com/search/users?q=${searchvalue}`).subscribe(res=>{
    console.log(res);
    this.total_count=res['total_count'];
    for(let i=0;i<10;i++){
      this.data.push(res['items'][i]);
    }
   })
 
  }
    




}
