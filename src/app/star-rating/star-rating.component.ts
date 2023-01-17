import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit{
  @Input()
  evaluacion!: number;
  auxEvaluacion!: number;
  recuperarEvaluacion(){
    this.auxEvaluacion=this.evaluacion;
  }
  ngOnInit(){
    this.recuperarEvaluacion();
  }
  @Output() ratingChanged = new EventEmitter<number>();
  cambiarEvaluacion() {
    this.ratingChanged.emit(this.auxEvaluacion);
}

}
