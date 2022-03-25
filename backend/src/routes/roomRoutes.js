import express from "express";
import {
    getRooms,
    getRoomByHotel ,
    getHotelsByAvailability,
    addRoom,
    newRoomValidators,
} from "./controllers/roomControllers.js.js.js";

const router = express.Router();

//get-Methoden für das anzeigen von allen Hotels,
// desweiteren Anzeigen von einem speziellen Hotel gesucht nach dem Hotelnamen
//man kann auch alle Hotels aus einer Stadt ausgeben
router.get("/", getRooms);
router.get("/search", getRoomByHotel);
router.get("/search", getHotelsByAvailability);
router.post("/", newRoomValidators, addRoom);
//put/Patch fehlt
//Delete Fehlt

export default router;

