import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
    
  cardVec: string [] = ["../../assets/images/Fallout-4.png","../../assets/images/Detroit-Become-Human.jpg","../../assets/images/horizon.jpg","../../assets/images/skyrim.jpg","../../assets/images/Cyberpunk.jpg" ];
  
  agregarCard(){
    console.log(this.cardVec[0])
    return this.cardVec[0]
  }
}
