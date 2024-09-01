import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService],
})
export class AppComponent implements OnInit {
  title = 'ecommercex_Angular';
  constructor(private userService:UserService){}

users:any;
newObject={username:"Youpiiii"};

  ngOnInit(){
        // console.log("OK");
        // this.userService.getUsers().subscribe((data)=>{
        //     this.users=data;
        // })


        this.userService.addObject(this.newObject).subscribe(response => {
          console.log('Données envoyées avec succès:', response);
        }, error => {
          console.error('Erreur lors de l\'envoi des données:', error);
        });
      }
  }

