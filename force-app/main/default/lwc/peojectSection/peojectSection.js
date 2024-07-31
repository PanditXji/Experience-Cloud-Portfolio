import { LightningElement } from 'lwc';
import PROJECT_IMAGE from "@salesforce/resourceUrl/projectImages"

export default class PeojectSection extends LightningElement {
  projectImage = PROJECT_IMAGE + '/projectImages/projectImage3.jpg';

   projectData =[{
    id:1,
    name:'Netflix Clone',
    description:'In this I can clone the netflix website to enhance my skills',
    technology:'HTML,CSS,Visual Studio Code',
    website:'www.google.com'
   },
   {
    id:2,
    name:'PassOP',
    description:'PassOP is an Password manager app where we can store our passwords and tasks',
    technology:'HTML,CSS,React,JS,Visual Studio Code',
    website:'www.google.com'
   },
  ]


  
}