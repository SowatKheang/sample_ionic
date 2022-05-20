import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
/** 
 * 
 * The ConnectivityService class is used to check the network status of the device and to set the
 * onlineIndicator variable to true or false depending on the network status 
 */
export class ConnectivityService {

  onlineIndicator: boolean;

  constructor() { }

  openCheckNetwork() {
    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed', status);
      this.onlineIndicator = status.connected;
    });
  }

  async logNetworkState() {
    const status = await Network.getStatus();
    console.log('Network status:', status);
    this.onlineIndicator = status.connected;
  }

}
