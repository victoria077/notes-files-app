import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.css"]
})
export class FilesComponent {
  fileToUpload: File = null;

  constructor(private http: HttpClient){}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}

private postFile(fileToUpload: File): Observable<boolean> {
  const endpoint = 'http://localhost:5000/api/Files';
  const formData: FormData = new FormData();
  formData.append('fileKey', fileToUpload, fileToUpload.name);
  let result:  Observable<boolean> = this.http.post(endpoint, formData).subscribe(() => {}); // подсказка. резултат выражения и его тип будут равны тому что вернет последний вызов в цепочке
  // конекретно тут, последний вызов это .subscribe(...)

  return result; //<- анализируй что ты должна вернуть, и что по факту возвращаешь. чтоб проверить типы например можешь в переменную заключтиь
  // вот в тексте ошибки четко написано в чем ошибка, там надо это понять. проаналищировать что ты должна вернуть, а что возвращаешь по факту
  //красное подчеркивание означает что то что (ты должна != факту)
}
}
