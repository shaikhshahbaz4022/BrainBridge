export interface User {
  username: string;
  email: string;
  password: string;
  role: string;
}
export interface LoginUser {
  email: string;
  password: string;
}
export interface Create_Course {
  title: string;
  description: string;
  image: string;
}
