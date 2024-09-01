import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService],
})
export class AppComponent  {
  title = 'ecommercex_Angular';

  }

