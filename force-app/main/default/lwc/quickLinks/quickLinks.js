import {LightningElement} from 'lwc';
import Image_Url from '@salesforce/resourceUrl/experienceCloudImages2';
import {NavigationMixin} from 'lightning/navigation';

export default class QuickLinks extends NavigationMixin (LightningElement) {
  data = [
    {
      id: 1,
      image: Image_Url + '/Experience_cloud_project_img/project2.jpg',
      text: 'Projects',
    },
    {
      id: 2,
      image: Image_Url + '/Experience_cloud_project_img/hero2.jpg',
      text: 'Skills',
    },
    {
      id: 3,
      image: Image_Url + '/Experience_cloud_project_img/certificate.jfif',
      text: 'Certification',
    },
  ];
  handleClick (e) {
    let selectedCard = e.currentTarget.dataset.id;
    console.log ('selectedCard:' + JSON.stringify (selectedCard));

    if (selectedCard == 1) {
      this.navigateToPages ('Projects__c');
    } else if (selectedCard == 2) {
      this.navigateToPages ('Skills__c');
    } else {
      this.navigateToPages ('Certifications__c');
    }
  }

  navigateToPages (pageApiName) {
    console.log ('pageApiName:' + JSON.stringify (pageApiName));

    this[NavigationMixin.Navigate] ({
      type: 'comm__namedPage',
      attributes: {
        name: pageApiName,
      },
    });
  }
}
