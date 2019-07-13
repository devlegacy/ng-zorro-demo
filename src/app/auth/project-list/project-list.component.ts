import { Component, OnInit } from '@angular/core';
import { ProjectListService } from 'src/app/shared/services/project-list.service';
import { Project } from 'src/app/shared/models/project';
import { NzMessageService, NzButtonComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  isHttpLoading: boolean = true;
  hasHttpError: boolean = false;
  canEditProject: boolean = false;
  visible: boolean = false;
  projects: Array<Project>;
  constructor(private _projectListService: ProjectListService, private _nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this._projectListService.getAll().subscribe(
      (data: Project[]) => {
        setTimeout(() => {
          console.log(data);
          this.projects = data;
          this.isHttpLoading = false;
        }, 3000)

      },
      err => {
        console.error(err);
        this.hasHttpError = true;
        this.isHttpLoading = false;
      },
      () => {
        console.info('Finish');
      }
    );
  }

  onDeleteProject(project: Project, btnDelete: NzButtonComponent) {
    this.confirm();
    console.log(project, btnDelete);
    // const target = $e.target as HTMLButtonElement;
    btnDelete.el.setAttribute('disabled', 'true');

    this._projectListService.deleteProject(project).subscribe(
      data => {
        console.log(data);
        this.getAllProjects();
      },
      err => {
        console.error(err);
      },
      () => {
        console.info('Finish');
      }
    );
  }

  demoClick(project: Project, $e: Event) {
    const target = $e.target as HTMLButtonElement;

    target.setAttribute('disabled', 'true');
    console.log(project, $e);
    console.log(target);
    this.canEditProject = true;
    console.log('clicked');

    setTimeout(() => {
      // target.disabled = false;
      // target.setAttribute('disabled', false);
      target.removeAttribute('disabled');
      console.log('enabled');
    }, 1000);

  }

  cancel($e): void {
    console.log($e);
    this._nzMessageService.info('El proyecto será conservado');
    // $e.el.setAttribute('disabled', 'true');
    // setTimeout(() => {
    //   $e.el.removeAttribute('disabled');
    // }, 1000);
  }

  confirm(): void {
    this._nzMessageService.success('Eliminando proyecto');
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
