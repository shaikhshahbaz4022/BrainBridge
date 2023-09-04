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
// {
//   "data": [
//     {
//       "id": 1,
//       "student_name": "shahbaz",
//       "instructor_name": "pulkit",
//       "course_name": "Full Stack Web Development",
//       "course_desc": "Dive into comprehensive full stack web dev. Learn front-end design & master back-end coding for dynamic web app creation. Enroll today!",
//       "enrollment_date": "2023-08-31T10:28:11.758Z"
//     }
//   ]
// }
export interface Enrolmentdata {
  id: string;
  student_name: string;
  instructor_name: string;
  course_name: string;
  course_desc: string;
  enrollment_date: string;
  image_course: string;
}
export interface assignInter {
  id: number;
  title: string;
  description: string;
  course_name: string;
  due_date: string;
  start_date: string;
  instructor_name: string;
  is_active: boolean;
}
export interface AssignmentSubmit {
  submission_link: string;
}

export interface InstructorCourse {
  id: string;
  instructor_id: string;
  title: string;
  description: string;
  image: string;
}

export interface SubmissionGet {
  id: any;
  student_name: string;
  instructor_name: string;
  course_name: string;
  submission_link: string;
  submission_date: string;
}

export interface AnnouncementUser {
  announcement_id: number;
  title: string;
  content: string;
  instructor_name: string;
  course_name: string;
  announcement_date: Date;
}
export interface createAssignInter {
  title: string;
  description: string;
  due_date: string;
}
export interface createAnnounInter {
  title: string;
  content: string;
}
