import { AsyncPipe, CommonModule, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";
import { MyButtonComponent } from "../../reusableComponents/my-button/my-button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  currenDate : Date = new Date()

  clientObj : Client = new Client()
  clientList: Client[] = [];

  clientService = inject(ClientService)

  // async pipe helps subscribe to the observable
  userList$ : Observable<any> = new Observable<any>

  ngOnInit(): void {
    this.loadClient()
    this.userList$ = this.clientService.getAllUser()
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList= res.data
    })
  }

  onSaveClient(data: string){
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel) => {
      if(res.result){
        alert("Client Created Success")
        this.clientObj = new Client()
        
      } else {
        alert(res.message)
      }
      window.location.reload()
    }

    )
  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure want to delete")
    if(isDelete){
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if(res.result){
          alert("client Delete Success")
          this.loadClient()
        }else{
          alert(res.message)
        }
      })
    }
    
  }

  onEdit(data: Client){
    this.clientObj = data;
    
  }
}
