import { Component, OnInit } from '@angular/core';
import {Request} from '../Request';
import {Config} from '../config.endpoints';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  public requests:  AngularFirestoreCollection<Request>;;
  public config : Config;
  public requestsDoc: AngularFirestoreDocument<Request>;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }
  addRequest(request: any): void {
    //Add the request to the collection
    let newRequest = new Request(request);
    this.requests.add(request);
  } //addRequest
  updateRequest(id, update): void {
    //Get the request document
    this.requestsDoc = this.db.doc<Request>(`${this.config.requestsEndPoint}/${id}`);
    this.requestsDoc.update(update);
  } //updateRequest
  deleteTask(id: Number): void {
    //Get the task documen
    this.requestsDoc = this.db.doc<Request>(`${this.config.requestEndPoint}/${id}`);
    //Delete the document
    this.requestsDoc.delete();
  } //deleteRequest


}