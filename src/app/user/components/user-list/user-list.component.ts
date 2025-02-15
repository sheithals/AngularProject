import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'besant-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userName: string = ""

  users: any[] = [];

  isEdit: boolean = false

  registrationForm!: FormGroup;

  userSubscribtion!: Subscription
  // userEmail = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      id: [''],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dob: [''],
      terms: ['', Validators.requiredTrue],
    });

    this.getUsers()

  }

  onSubmit() {
    if (!this.registrationForm.valid) return
    const user = this.registrationForm.value;
    console.log(user, "userss", this.isEdit);

    if (this.isEdit) {
      this.crudService.updateUser(user.id, user).subscribe({
        next: (data: any) => {
          console.log(data, "create users api success response");
          this.getUsers()
        },
        error: () => {
          // alert('Something went wrong.. ')
        }
      })
    } else {
      this.crudService.createUser(user).subscribe({
        next: (data: any) => {
          console.log(data, "create users api success response");
          this.getUsers()
        }, error: () => {
          // alert('Something went wrong.. ')
        }
      })
    }

  }

  getUsers() {
    this.userSubscribtion = this.crudService.getUsers().subscribe({
      next: (users: any) => {
        console.log(users, "coming from backend");
        this.users = users
        this.isEdit = false
        this.registrationForm.reset()
      },
      error: () => {
        // alert('Something went wrong.. ')
      }

    })
  }

  editUser(user: any) {
    console.log(user, "editUser");
    this.isEdit = true
    const { fullName, email, password, phone, gender, address, dob, profilePicture, terms, id } = user;
    this.registrationForm.setValue({
      fullName,
      email,
      password,
      phone,
      gender,
      address,
      dob,
      id,
      terms,
    })
  }
  deleteUser(user: any) {
    this.crudService.deleteUser(user.id).subscribe({
      next: (response: any) => {
        console.log(response, "response");
        this.getUsers()
      },
      error: () => {
        // alert('Something went wrong.. ')
      }
    })
  }

  trackById(index: number, user: any) {
    // console.log(index, user);
    return user.id
  }

  ngOnDestroy(): void {
    if (this.userSubscribtion) {
      this.userSubscribtion.unsubscribe()
    }
  }


}
