import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  form: FormGroup;
  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      fname: [],
      lname: [],
      phone: []
    });
  }
  submitForm() {
    alert(JSON.stringify(this.form.getRawValue()));
    this.form.reset();
    //  alert(this.form.getRawValue());
  }
}
