import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChallengeModel } from '../../models/challenges/challenge.model';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'add-challenge',
  templateUrl: 'add-challenge.component.html',
  styleUrls: ['challenge.component.css']
})

export class AddChallengeComponent implements OnInit {

  addChallengeForm : FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.addChallengeForm = formBuilder.group({
      'title' : "",
      'days': "",
      'start' : "",
      'end' : "",
      'imgUrl' : ""
    })

  }

   addChallenge(value: any):void{
    console.log('Reactive Form Data:  ')
    console.log(value);
  }

  ngOnInit() { }
}
