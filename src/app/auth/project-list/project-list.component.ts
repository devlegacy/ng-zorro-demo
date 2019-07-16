import { Component, OnInit } from '@angular/core';
import { ProjectListService } from 'src/app/shared/services/project-list.service';
import { Project } from 'src/app/shared/models/project';
import { NzMessageService, NzButtonComponent } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

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
  project: Project = null;
  users: Array<any> = [];
  userSelected: number = null;
  frmProject: FormGroup;

  constructor(public _projectListService: ProjectListService, public _nzMessageService: NzMessageService, public fb: FormBuilder, public _userService: UserService) { }

  ngOnInit() {
    this.getAllProjects();
    this.getAllUsers();
    this.frmProject = this.fb.group({
      title: [null, [Validators.required]],
      slug: [null, [Validators.required]],
      user_id: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
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

  getAllUsers() {
    this._userService.getAll().subscribe(
      (data: []) => {
        this.users = data;
        if (this.users.length > 0) {
          this.userSelected = this.users[0].id;
        }
      },
      err => {
        console.error(err);
      },
      () => {
        console.info('End users fetch');
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

  submitForm($e: Event) {
    for (const i in this.frmProject.controls) {
      this.frmProject.controls[i].markAsDirty();
      this.frmProject.controls[i].updateValueAndValidity();
    }

    this.project = this.frmProject.value;
    this.project.user_id = 2;
    console.log(this.project);

    this._projectListService.createProject(this.project).subscribe(
      (data) => {
        console.log(data);
        this.getAllProjects();
        this.close();
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('end');
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
