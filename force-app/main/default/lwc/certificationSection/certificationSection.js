import { LightningElement } from 'lwc';
import IMAGE_URL from "@salesforce/resourceUrl/certificationImages"

export default class CertificationSection extends LightningElement {

  certificateData = [
    {
      id: 1,
      name: "Web Developer",
      date: '16/01/2022',
      certid: '1234',
      image: IMAGE_URL + '/projectImages/develpoer.png',
    },
    {
      id: 2,
      name: "Python Developer",
      date: '16/04/2024',
      certid: '3456',
      image: IMAGE_URL + '/projectImages/python.png',
    },
    {
      id: 3,
      name: "Work Experience",
      date: '16/04/2023',
      certid: '8989',
      image: IMAGE_URL + '/projectImages/exp.jpg',
    },
    {
      id: 4,
      name: "LWC Developer",
      date: '04/06/2024',
      certid: '2002',
      image: IMAGE_URL + '/projectImages/lwc_badge.png',
    },
  ]

}