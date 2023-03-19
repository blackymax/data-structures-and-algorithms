import { Shipment } from "../shipments/shipment";
import { Shipper } from "./Shipper";

export class PacificParcelShipper extends Shipper {
  shipment: Shipment;
  shipperType = "Chicago Sprint" as Shipper["shipperType"];
  ounceCost: number;

  getCost(): number {
    switch (this.shipment.type) {
      case "letter":
        this.setOunceCost(0.51);
        return this.calculateCost();
      case "package":
        this.setOunceCost(0.2);
        return this.calculateCost();
      case "oversized":
        this.setOunceCost(this.ounceCost + 0.02);
        return this.calculateCost();
    }
  }
}
