import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'besant-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
reactiveForm!: FormGroup;
  formdata: any = {}; 
  formStatus: string = ''; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      firstname: ['', [Validators.required, this.noSpacesValidator]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
        region: ['', Validators.required],
        postal: ['', Validators.required]
      }),
      skills: this.fb.array([]), 
      experience: this.fb.array([])
    });
  }

  noSpacesValidator(control: any) {
    if (control.value && control.value.includes(' ')) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  get experience(): FormArray {
    return this.reactiveForm.get('experience') as FormArray;
  }

  AddSkills() {
    this.skills.push(this.fb.control('')); 
  }

  DeleteSkill(index: number) {
    this.skills.removeAt(index); 
  }

  AddExperience() {
    this.experience.push(
      this.fb.group({
        company: ['', Validators.required],
        position: ['', Validators.required],
        totalExp: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required]
      })
    );
  }

  DeleteExperience(index: number) {
    this.experience.removeAt(index);
  }
  setFormData() {
    this.reactiveForm.setValue({
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      username: 'johndoe',
      dob: '1990-01-01',
      gender: 'male',
      address: {
        street: '123 Main St',
        country: 'USA',
        city: 'New York',
        region: 'NY',
        postal: '10001'
      },
      skills: ['JavaScript', 'Angular'],
      experience: [
        {
          company: 'Company A',
          position: 'Software Developer',
          totalExp: 5,
          start: '2015-06-01',
          end: '2020-06-01'
        }
      ]
    });
  }
  patchFormData() {
    this.reactiveForm.patchValue({
      firstname: 'Jane',
      lastname: 'Smith'
    });
  }

  OnFormSubmitted() {
    if (this.reactiveForm.valid) {
      this.formdata = this.reactiveForm.value; 
      this.formStatus = 'valid';
      console.log(this.reactiveForm.value);
    } else {
      this.formStatus = 'invalid';
      console.log('Form is invalid');
    }
  }
}
