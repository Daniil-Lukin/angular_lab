import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MaterialCompontents = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule,

]

@NgModule({
  imports: [...MaterialCompontents],
  exports: [...MaterialCompontents],

})
export class MaterialModule { }
