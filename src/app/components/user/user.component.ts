import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private userService: UserService) { }

  user = {
    username: '',
    email: '',
    password: ''
  };
  usersDisplay: any = {}

  isUpdating: boolean=false
  ngOnInit() {
    console.log("OK");
    this.userService.getUsers().subscribe((data) => {
      this.usersDisplay = data;

    })

  }


  toogle(){

    this.isUpdating=!this.isUpdating;
  }
  onSubmit() {
    this.userService.addUser(this.user).subscribe(
      response => {
        console.log('Utilisateur enregistré avec succès', response);
      },
      error => {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur', error);
      }
    );
  }

  deleteUser(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe(
        response => {
          console.log('Utilisateur supprimé avec succès', response);
          this.ngOnInit()

        },
        error => {
          console.error('Erreur lors de la suppression de l\'utilisateur', error);
        }
      );
    }
  }

  updateUser(id: number, userToUpdate: Object) {
    this.userService.updateUser(id, userToUpdate).subscribe(
      response => {
        console.log("Modifié !", response);
        this.isUpdating=false;

      },
      error => {
        console.log("erreur",error);

      }
    )
  }
}


