import { Component, OnInit } from '@angular/core';
import { GhRep } from '../../models/ghRep';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  repository: string = ''
  user: GhUser | null = null
  rep: GhRep [] | undefined

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (ghUser) => {
        this.user = ghUser
      }
    )

    this.ghService.findRepository(this.username).subscribe(
      (ghRep) => {
        this.rep = ghRep
      }
    )
  }

}
