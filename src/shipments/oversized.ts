import { Shipment } from "./shipment";

export class Oversized extends Shipment {
  shipmentId: number;
  weight: number;
  fromAdress: string;
  fromZipCode: string;
  toAdress: string;
  toZipCode: string;
  type = "oversized" as Shipment["type"];
}
