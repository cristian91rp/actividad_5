import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newNoticia: INoticia = {tittle:'', url:'', text:'', date:''};
  @Output() noticiaEmitida: EventEmitter<INoticia> = new EventEmitter()

  guardar(): void{
    if(this.newNoticia.tittle !== "" && this.newNoticia.url !== "" && this.newNoticia.text !== "" && this.newNoticia.date !== "" ) {
      this.noticiaEmitida.emit(this.newNoticia)
      this.newNoticia = {tittle:'', url:'', text:'', date:''};
    }else{
      alert('Completa todos los campos')
    }
  }
  contador: number = 1;

  desplegable(){
    this.contador ++
  }
}
