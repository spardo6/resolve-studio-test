import { Component, OnInit } from '@angular/core';
import { Source } from 'src/app/interfaces/source.interface';
import { SourceService } from 'src/app/services/source.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.scss']
})
export class FilesPageComponent implements OnInit {

  public sources: Source[];

  constructor(private sourceService: SourceService, private authService: AuthService) { }

  ngOnInit() {
    this.sourceService.admin(this.authService.session.user.id).subscribe((response) => {
      this.sources = response;
    });
  }

  public delete(index: number) {
    this.sources.splice(index, 1);
  }

}
