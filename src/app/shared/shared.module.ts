import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { TabComponent } from './components/tab/tab.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent
  ],

})
export class SharedModule { }
