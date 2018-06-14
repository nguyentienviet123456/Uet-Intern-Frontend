import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../model/constants';

@Injectable()
export class AdminService {

  constructor(private _http: Http) { }
  private BaseUrl = Constants.BaseUrl
  private _urlUpdateSemester = this.BaseUrl+"/api/admin/update-semester/{0}";
  private _urlNewSemester = this.BaseUrl+ "/api/admin/semesters";
  private _urlGetAllSemester = this.BaseUrl+ "/api/admin/semesters";
  private _urlGetByRole = this.BaseUrl+"/api/admin/accounts/all/role";
  private _urlPhongVan = this.BaseUrl+ "/api/admin/phongvan/{0}/{1}/{2}";
  private _urlThucTap = this.BaseUrl+ "/api/admin/thuctap/{0}/{1}/{2}";
  private _urlDanhGiaAll = this.BaseUrl+ "/api/admin/danhgia/all/{0}";
  private _urlPhanCong = this.BaseUrl+ "/api/admin/phancong/all/{0}";
  private _urlNewUser = this.BaseUrl+ "/api/admin/accounts/{0}";
  private _urlDanhGiaSinhVien = this.BaseUrl+ "/api/admin/danhgia/student/{0}/{1}";
  private _urlDeleteAccount = this.BaseUrl+ "/api/admin/del-account/{0}";
  private _urlDeleteSemester = this.BaseUrl+ "/api/admin/del-semester/{0}";
  private _urlDanhGiaNhom = this.BaseUrl+ "/api/admin/danhgia/nhom/{0}";
  private _urlGetStudentById = this.BaseUrl + "/api/admin/account/id";
  //quan ly tai khoan
  //quan ly dot thuc tap
  //gui nhan thong bao
  //quan ly danh gia student
  //phan cong giang vien huong dan
  //cap nhat diem danh gia giang vien
  //thong ke va bao cao
  //quan ly doi tac
  //gets by role
  public GetByRole(role: string, token: string){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', token);
    return this._http.get(this.BaseUrl+"/api/admin/accounts/all/"+ role , { headers: headers })
      .map(res => res.json());
  }

  //gets student by Id
  public GetStudentById(id: number, token: string){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', token);
    return this._http.get(this.BaseUrl+"/api/admin/account/"+ id , { headers: headers })
      .map(res => res.json());
  }

  //updates student
  public UpdateStudent(id:number, token: string, data: any){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', token);
    let body =  JSON.stringify({
      username: data.username,
      email: data.email,
      role: data.role,
      fullname: data.fullname,
      birth: data.birth,
      sdt: data.sdt,
      lop: data.lop,
      khoa: data.khoa,
      nganh: data.nganh,
      gpa: data.gpa,
      nam_tot_nghiep: data.nam_tot_nghiep,
      skype_id : data.skype_id,
      fb_di: data.fb_di,
      ngoai_ngu: data.ngoai_ngu,
      chung_chi: data.chung_chi,
      kinh_nghiem: data.kinh_nghiem,
      contact: data.contact,
    }); 
    return this._http.post(this.BaseUrl+"/api/admin/account/"+ id, body , { headers: headers })
    .map(res => res.json());
  }
}
