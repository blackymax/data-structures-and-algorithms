import { Shipment } from "./shipment";

export class ShipmentDecorator {
  shipment: Shipment;
  isFragile: boolean;
  isDoNotLeave: boolean;
  isReturnReceiptRequired: boolean;
  constructor(
    shipment: Shipment,
    isFragile = false,
    isDoNotLeave = false,
    isReturnReceiptRequired = false
  ) {
    this.shipment = shipment;
    this.isFragile = isFragile;
    this.isDoNotLeave = isDoNotLeave;
    this.isReturnReceiptRequired = isReturnReceiptRequired;
  }

  ship() {
    return `${this.shipment.ship()}\n
    ${this.isFragile ? "**MARK FRAGILE**" : ""}\n
    ${this.isDoNotLeave ? "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**" : ""}\n
    ${this.isReturnReceiptRequired ? "**MARK RETURN RECEIPT REQUESTED**" : ""}`;
  }
}

