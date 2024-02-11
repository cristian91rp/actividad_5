import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticia } from './interfaces/inoticia.interface';
import { FormComponent } from './components/form/form.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, NoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrNoticias: INoticia[] = [
    {
      tittle: 'Descubierta una nueva especie de serpiente con alas en la selva amazónica',
      url: 'https://th.bing.com/th/id/OIG1.UvXZ29chODmcICK8DXYK?pid=ImgGn',
      text: 'Un grupo de biólogos ha anunciado el descubrimiento de una nueva especie de serpiente con alas en lo profundo de la selva amazónica. Estas serpientes, bautizadas como "Serpentes volans", tienen membranas de piel extendidas entre sus costillas que les permiten planear cortas distancias entre los árboles. Este hallazgo desafía las creencias convencionales sobre la evolución de las serpientes y ha generado un gran interés en la comunidad científica.',
      date: '2024-02-09',
    },
    {
      tittle: 'El primer hotel submarino de lujo abre sus puertas en el Caribe',
      url: 'https://th.bing.com/th/id/OIG4._aLN6ZE1tzYz6xC8Hc3A?pid=ImgGn',
      text: 'Después de años de planificación y construcción, el primer hotel submarino de lujo ha sido inaugurado en las cristalinas aguas del Caribe. El hotel, llamado "Atlantis Submarine Resort", ofrece a sus huéspedes la experiencia única de dormir bajo el mar en lujosas suites con vistas panorámicas de la vida marina circundante. Equipado con tecnología de vanguardia y diseñado para ser respetuoso con el medio ambiente, este hotel promete ser un destino de ensueño para los amantes del buceo y la aventura.',
      date: '2024-02-09',
    }
  ]

  insertData($event: any): void{
    this.arrNoticias.push($event);
  }
 
}