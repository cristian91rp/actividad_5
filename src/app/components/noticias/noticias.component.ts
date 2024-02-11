import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})

export class NoticiasComponent {
  @Input() noticias: INoticia[] = [];
  ngOnInit(): void {
    this.cargarDatos() 
  };

cargarDatos() {
    let html = "";
    this.noticias.forEach(noticia =>{
      html += ` <article class = "articulo">
                  <h2>${noticia.tittle}</h2>
                  <img src="${noticia.url}" alt="">
                  <div>
                      <p class ="contenido">${noticia.text}</p>
                  </div>
                  <time datetime="date">${noticia.date}</time>
                </article>`
    })
    return html
  };
}
