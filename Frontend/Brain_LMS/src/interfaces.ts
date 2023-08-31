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
// {
//   "data": [
//     {
//       "id": 1,
//       "title": "Full Stack Web Development",
//       "description": "Dive into comprehensive full stack web dev. Learn front-end design & master back-end coding for dynamic web app creation. Enroll today!",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDTFGeNIue5P_TkB6N7kRzhJ1EPjPHLMC9llcSrBbiawSw4J3qYhIK8YoVm9TezJDYjc&usqp=CAU",
//       "instructor": {
//         "id": 2,
//         "username": "pulkit"
//       }
//     }
//   ]
// }
export interface inst {
  id: number;
  username: string;
}
export interface CourseData {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: inst;
}
export interface data {
  data: [];
}
