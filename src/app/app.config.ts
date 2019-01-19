export class AppConfig {

  /* App Status */

  public static get APP_ONLINE(): boolean {
    return true;
  }

  /* Server URL */
  public static get SERVER_USER_URL(): string {
    return this.APP_ONLINE ? 'http://ec2-34-201-171-180.compute-1.amazonaws.com:3000/users/': 'http://localhost:3000/users/';
  }

  public static get SERVER_API_URL(): string {
    return this.APP_ONLINE ? 'http://ec2-34-201-171-180.compute-1.amazonaws.com:3000/api/': 'http://localhost:3000/api/';
  }

  /* Google Maps API Key */
  public static get GOOGLE_MAPS_API_KEY(): string {
    return 'AIzaSyBBfil0LevQE6xWdKL8YLFWKYPveOf_nVc';
  }
  /* slydepay  */
  public static get SLYDRPAY_URL(): string {
    return 'https://app.slydepay.com.gh/api/merchant/invoice/create';
  }

  /* Google Analytics Tracking ID  */
  public static get TRACKING_ID(): string {
    return '';
  }

  /* Header color (only Android Multitask view)  */
  public static get HEADER_COLOR(): string {
    return '#283891';
  }

}
