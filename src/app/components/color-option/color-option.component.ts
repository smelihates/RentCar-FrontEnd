import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-option',
  templateUrl: './color-option.component.html',
  styleUrls: ['./color-option.component.css'],
})
export class ColorOptionComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;

  constructor(private colorService: ColorService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setRouteColor(color: Color) {
    if (color == undefined) {
      this.router.navigateByUrl('car/list');
    } else {
      this.router.navigateByUrl('cars/color/' + color.colorId);
    }
  }
}
