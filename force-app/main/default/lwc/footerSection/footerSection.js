import { LightningElement } from 'lwc';
import IMAGE_URL from "@salesforce/resourceUrl/certificationImages"

export default class FooterSection extends LightningElement {
  
  youtubeLogo = IMAGE_URL + '/projectImages/youtube.png';
 linkedInLogo = IMAGE_URL + '/projectImages/linkedin.png';
  instaLogo = IMAGE_URL + '/projectImages/insta.png';
  mainLogo = IMAGE_URL + '/projectImages/logo.png';
}