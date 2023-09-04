import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
})
export class BoxesComponent implements OnInit {
  constructor(private cdRef: ChangeDetectorRef) {}
  right = faAngleRight;
  buttonArrayRight = faArrowRight;

  data: any;
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.data = this.data = localStorage.getItem('token') || null;
    this.cdRef.detectChanges();
  }
  boxData: any[] = [
    {
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bachelor-of-science-computer-science-bits/2c1c9800-93b0-48df-b278-a5246da9e086.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      companyName: 'Birla Institute of Technology ,Pilani.',
      link: 'hello',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/b9/c608c79b5c498a8fa55b117fc3282f/5.-Square-logo-for-landing-page---Alpha.png',
      courseName: 'Masters Of Technology',
      linkName: 'Bachelor of Science in Computer Science',

      degree: 'Degree',
      certification: 'Certified',
    },
    {
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/emba-iitr/8e84c46b-a993-49d9-80cf-0e77a78399b0.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      companyName: 'IIT Roorkee.',
      degree: 'Degree',
      link: 'hello',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/93/dafd90b13544b3844d0967bcb2fe77/iitricon.png',
      courseName: 'Masters Of Technology',
      linkName: 'Executive MBA',
      certification: 'Advanced',
    },
    {
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/msc-cyber-security-london/msc-cyber-security-london-thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      companyName: '.P. Jain Institute of Management',
      degree: 'Diploma',
      link: 'hello',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/fb/b28a301e0211e8a40e23e4176c8e4a/UoL-Logo_180x180.png',
      courseName: 'Masters Of Technology',
      linkName: 'Post Graduate Diploma in Management Online',
      certification: 'Licensed',
    },
    {
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/illinois/Blue+Waters+Cabinets+Angle+square.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      companyName: 'University of Illinois at Urbana',
      degree: 'Degree',
      link: 'hello',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png',
      courseName: 'Master of Computer Science',
      linkName: 'Master of Computer Science in Data Science',
      certification: 'Qualified',
    },
  ];

  certifications: any[] = [
    {
      name: 'Google',
      course: 'Google Data Analytics',
      type: 'Professional Certificate',
      image:
        'https://www.careermatch.com/job-prep/wp-content/uploads/sites/2/2018/06/How-To-Become-A-Web-Designer_Image.jpg',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png',
    },
    {
      name: 'Google',
      course: 'Google IT Support',
      type: 'Professional Certificate',
      image:
        'https://assets.telegraphindia.com/telegraph/2022/Sep/1663656577_edugraph.jpg',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png',
    },
    {
      name: 'Google',
      course: 'Full Stack Web Development',
      type: 'Professional Certificate',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18vF8_r1V8LMbtyk82aAiIO9tENShPkNBBqiDDne4Z4pGEB6pP4aXZ6vEHrxfK4j7spM&usqp=CAU',
    },
    {
      name: 'Google',
      course: 'IBM Data Science',
      type: 'Professional Certificate',
      image:
        'https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2020/11/HERO-Data-Analyst-Career-Path.png',
      logo: 'http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png',
    },
  ];

  sentmessage() {
    Swal.fire('Please Login ', 'To Enroll Courses ', 'question');
  }
}
