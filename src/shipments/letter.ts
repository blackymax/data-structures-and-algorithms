import { Shipment } from "./shipment";

export class Letter extends Shipment {
  shipmentId: number;
  weight: number;
  fromAdress: string;
  fromZipCode: string;
  toAdress: string;
  toZipCode: string;
  type = "letter" as Shipment["type"];
}
