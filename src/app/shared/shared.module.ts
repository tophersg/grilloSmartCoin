import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    FooterComponent
  ],
  exports: [NavComponent, FooterComponent]
})
export class SharedModule { }
