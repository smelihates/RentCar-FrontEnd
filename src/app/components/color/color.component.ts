import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];

  constructor(public colorService: ColorService) {}

  ngOnInit(): void {
    //this.getAll();
    this.colorService.refreshColorList();
  }

  getAll() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }
  populateForm(selectColor: Color) {
    this.colorService.colorFormData = Object.assign({}, selectColor);
  }
}
