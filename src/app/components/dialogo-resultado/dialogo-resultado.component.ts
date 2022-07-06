import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-resultado',
  templateUrl: './dialogo-resultado.component.html',
  styleUrls: ['./dialogo-resultado.component.css']
})
export class DialogoResultadoComponent implements OnInit {

constructor(
    public dialogo: MatDialogRef<DialogoResultadoComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }

  ngOnInit() {
  }

}