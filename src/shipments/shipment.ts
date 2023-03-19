import shipperController from "../shipperController";

export class Shipment {
  shipmentId: number;
  weight: number;
  fromAdress: string;
  fromZipCode: string;
  toAdress: string;
  toZipCode: string;
  type: "letter" | "package" | "oversized";

  constructor(
    shipmentId: number,
    weight: number,
    fromAdress: string,
    fromZipCode: string,
    toAdress: string,
    toZipCode: string
  ) {
    this.shipmentId = shipmentId ? shipmentId : this.shipmentId + 1;
    this.weight = weight;
    this.fromAdress = fromAdress;
    this.fromZipCode = fromZipCode;
    this.toAdress = toAdress;
    this.toZipCode = toZipCode;
  }

  public getShipmentId() {
    return this.shipmentId;
  }

  public ship() {
    return shipperController.getInstance(this).getCost().toString();
  }
}
