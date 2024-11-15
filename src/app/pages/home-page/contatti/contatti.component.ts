import { Component } from '@angular/core';
import { OutlinedButtonComponent } from '../../../components/outlined-button/outlined-button.component';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [OutlinedButtonComponent, TimelineModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {
  events = [
    { status: 'Via G.Mameli, 18 22063, Cantù ', date: '15/10/2020 10:30', icon: 'pi pi-map-marker'},
    { status: '+39 12345678', date: '15/10/2020 14:00', icon: 'pi pi-phone', color: '#673AB7' },
    { status: 'esempio@gmail.com', date: '15/10/2020 16:15', icon: 'pi pi-envelope', color: '#FF9800' },
    { status: 'Ig profile', date: '16/10/2020 10:00', icon: 'pi pi-instagram', color: '#607D8B' },
    { status: 'Fb profile', date: '16/10/2020 10:01', icon: 'pi pi-facebook', color: '#607D8B' }
];
}
