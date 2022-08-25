import { Component, OnInit, ViewChild } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('result') result: any;
  title = 'kaizen';

  public ngOnInit():void {
    
  }

  public add(num1: number, num2: number): number {
    return Number(num1) + Number(num2);    
  }

  public printAdd(num1: any, num2: any): any {
    this.result.nativeElement.value = this.add(num1, num2);    
  }
}