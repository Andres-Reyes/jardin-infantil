export interface Roles{
     admin?: boolean;
     user?: boolean;
}
// tslint:disable-next-line: class-name
export interface userInterfase {
     id?: string;
     email?: string;
     password?: string;
     roles: Roles;
}
