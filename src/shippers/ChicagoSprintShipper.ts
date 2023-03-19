import { Shipment } from "../shipments/shipment";
import { Shipper } from "./Shipper";

export class ChicagoSprintShipper extends Shipper {
  shipment: Shipment;
  shipperType = "Chicago Sprint" as Shipper["shipperType"];
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
        this.setOunceCost(0.42);
        return this.calculateCost();
      case "package":
        this.setOunceCost(0.2);
        return this.calculateCost();
      case "oversized":
        return 0;
    }
  }
}
