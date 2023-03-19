import { Shipment } from "../shipments/shipment";
import { Shipper } from "./Shipper";

export class AirWestShipper extends Shipper {
  shipment: Shipment;
  shipperType = "Air West" as Shipper["shipperType"];
  ounceCost: number;
  
  setOunceCost(cost: number): void {
    this.ounceCost = cost;
  }

  calculateCost(): number {
    return this.ounceCost * this.shipment.weight;
  }

  getCost(): number {
    switch (this.shipment.type) {
      case "letter":
        this.setOunceCost(0.39);
        return this.calculateCost();
      case "package":
        this.setOunceCost(0.39);
        return this.calculateCost();
      case "oversized":
        return this.calculateCost() + 10;
    }
  }
}
