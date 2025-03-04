import { Component } from '@angular/core';
import { OwnerService } from '../../Services/owner.service';

@Component({
  selector: 'app-display-all',
  standalone: false,
  templateUrl: './display-all.component.html',
  styleUrl: './display-all.component.css'
})
export class DisplayAllComponent {
  owners : any[]=[];
  constructor(private myService:OwnerService)
  {

  }
  ngOnInit(): void 
  {
    this.myService.getAllOwners().subscribe((data)=>this.owners=data)
  }
}
