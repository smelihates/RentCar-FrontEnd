import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-crud',
  templateUrl: './color-crud.component.html',
  styleUrls: ['./color-crud.component.css'],
})
export class ColorCrudComponent implements OnInit {
  constructor(
    public colorService: ColorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    //console.log('color ' + this.colorService.colorFormData.colorId);
    if (
      this.colorService.colorFormData.colorId == 0 ||
      this.colorService.colorFormData.colorId == undefined
    ) {
      this.addColor(form);
      //console.log('add');
    } else {
      this.updateColor(form);
      //console.log('update');
    }
  }

  addColor(form: NgForm) {
    //console.log(form);
    this.colorService.addColor().subscribe(
      (response) => {
        this.resetForm(form);
        this.colorService.refreshColorList();
        this.toastrService.success('Başarıyla Eklendi', 'Renk');
      },
      (responseError) => {
        //console.log(responseError);
      }
    );
  }

  updateColor(form: NgForm) {
    //console.log(form);
    this.colorService.updateColor().subscribe(
      (response) => {
        this.resetForm(form);
        this.colorService.refreshColorList();
        this.toastrService.info('Başarıyla güncellendi', 'Renk');
      },
      (errorResponse) => {}
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.colorService.colorFormData = new Color();
  }
}
