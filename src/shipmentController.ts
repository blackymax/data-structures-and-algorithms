import { Letter } from "./shipments/letter";
import { Oversized } from "./shipments/oversized";
import { Package } from "./shipments/package";
import { Shipment } from "./shipments/shipment";

class ShipmentController {
  public getInstance(
    shipmentId: number,
    weight: number,
    fromAdress: string,
    fromZipCode: string,
    toAdress: string,
    toZipCode: string
  ): Shipment {
    if (weight <= 15) {
      return new Letter(
        shipmentId,
        weight,
        fromAdress,
        fromZipCode,
        toAdress,
        toZipCode
      );
    }
    if (weight <= 160) {
      return new Package(
        shipmentId,
        weight,
        fromAdress,
        fromZipCode,
        toAdress,
        toZipCode
      );
    }
    return new Oversized(
      shipmentId,
      weight,
      fromAdress,
      fromZipCode,
      toAdress,
      toZipCode
    );
  }
}

export default new ShipmentController();
