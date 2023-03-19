import { Shipment } from "../shipments/shipment";

export class Shipper {
  shipment: Shipment;
  shipperType: "Air West" | "Chicago Sprint" | "Paceific Parcel";
  ounceCost = 0.39;

  constructor(shipment: Shipment) {
    this.shipment = shipment;
  }

  setOunceCost(cost: number): void {
    this.ounceCost = cost;
  }

  calculateCost(): number {
    return this.ounceCost * this.shipment.weight;
  }
  getCost(): number {
    return this.ounceCost * this.shipment.weight;
  }

  toString() {
    return `Shipment with the ID ${
      this.shipment.shipmentId
    } will be picked up from ${this.shipment.fromAdress} ${
      this.shipment.fromZipCode
    } and shipped to ${this.shipment.toAdress} ${this.shipment.toZipCode}
    Cost = ${this.getCost()}`;
  }
}
