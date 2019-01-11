import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.scss"]
})
export class FilesComponent {
  files = [];
  fileToUpload: File = null;
  fileId: string;

  constructor(private http: HttpClient) {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.files.push({'files': this.fileId});
    this.postFile(this.fileToUpload).subscribe(
      data => {
        // do something, if upload success
      },
      error => {
        console.log(error);
      }
    );
  }

  postFile(fileToUpload: File): Observable<Object> {
    const endpoint = "http://localhost:5000/api/Files";
    const formData: FormData = new FormData();
    formData.append("files", fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }

  deleteFile(index: number){
    this.files.splice(index, 1);
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/api/Files')
    .subscribe((response) => {
      this.files = response;
    });
  }
}
