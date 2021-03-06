import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SourceService } from 'src/app/services/source.service';
import { Source } from 'src/app/interfaces/source.interface';
import { Company } from 'src/app/interfaces/company.interface';

@Component({
  selector: 'app-source-card',
  templateUrl: './source-card.component.html',
  styleUrls: ['./source-card.component.scss']
})
export class SourceCardComponent implements OnInit {

  @Input()
  public source: Source;

  @Output()
  public deleted = new EventEmitter();

  get company(): Company { return this.source.company as Company; }

  constructor(private sourceService: SourceService) { }

  ngOnInit() { }

  public delete(id: number) {
    if (confirm('Confirme para eliminar la empresa')) {
      this.sourceService.delete(id).subscribe((response) => {
        this.deleted.emit({ id: response.id });
      });
    }
  }

}
