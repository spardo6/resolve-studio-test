export interface User {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  email_verified_at?: Date;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}
