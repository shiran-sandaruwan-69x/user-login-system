export default class UserDTO {
  private _fName:string;
  private _lName:string;
  private _email:string;
  private _password:string;
  private _avatar:string;
  private _userState:boolean;
  private _regDate:Date;
  private _regTime:string;


  constructor(fName: string, lName: string, email: string, password: string, avatar: string, userState: boolean, regDate: Date, regTime: string) {
    this._fName = fName;
    this._lName = lName;
    this._email = email;
    this._password = password;
    this._avatar = avatar;
    this._userState = userState;
    this._regDate = regDate;
    this._regTime = regTime;
  }


  get fName(): string {
    return this._fName;
  }

  set fName(value: string) {
    this._fName = value;
  }

  get lName(): string {
    return this._lName;
  }

  set lName(value: string) {
    this._lName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get userState(): boolean {
    return this._userState;
  }

  set userState(value: boolean) {
    this._userState = value;
  }

  get regDate(): Date {
    return this._regDate;
  }

  set regDate(value: Date) {
    this._regDate = value;
  }

  get regTime(): string {
    return this._regTime;
  }

  set regTime(value: string) {
    this._regTime = value;
  }
}
