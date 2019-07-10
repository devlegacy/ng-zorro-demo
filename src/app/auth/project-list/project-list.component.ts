import { Component, OnInit } from '@angular/core';
import { ProjectListService } from 'src/app/shared/services/project-list.service';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  isLoading: boolean = true;
  projects: Array<Project>;
  constructor(private _projectListService: ProjectListService) { }

  ngOnInit() {
    this._projectListService.getAll().subscribe(
      (data: Project[]) => {
        setTimeout(() => {
          console.log(data);
          this.projects = data;
          this.isLoading = false;
        }, 3000)

      },
      err => {
        console.error(err);
      },
      () => {
        console.info('Finish');
      }
    );
  }

}
