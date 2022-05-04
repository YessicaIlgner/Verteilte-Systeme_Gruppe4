import express from "express";
import {
  getHotels,
  getHotelsByName,
  getHotelsByCity,
  addHotel,
  newHotelValidators,
  replaceStars,
  deleteHotel,
} from "../controllers/hotelControllers.js";
import {
  getRooms,
  getRoomsByName,
  getRoomsByAvailability,
  newRoomValidators,
  addRoom,
  changeRoom,
  deleteRoom,
} from "../controllers/roomControllers.js";
import {
  getEmployees,
  getEmployeebyJob,
  getEmployeeByLastname,
  newEmployeeValidators,
  addEmployee,
  editEmployee,
  deleteEmployee,
} from "../controllers/employeeControllers.js";
const router = express.Router();
//-----------------------------------------------------------Hotel-------------------------------------------------------------------------
router.get("/", getHotels);
router.get("/search", getHotelsByName);
router.get("/search", getHotelsByCity);
router.post("/add", newHotelValidators, addHotel);
router.put("/change", replaceStars);
router.delete("/delete", deleteHotel);
//------------------------------------------------------------Room-------------------------------------------------------------------------
router.get("/", getRooms);
router.get("/search", getRoomsByName);
router.get("/search", getRoomsByAvailability);
router.post("/add", newRoomValidators, addRoom);
router.put("/change", changeRoom);
router.delete("/delete", deleteRoom);
//------------------------------------------------------------Employees--------------------------------------------------------------------
router.get("/", getEmployees);
router.get("/search", getEmployeebyJob);
router.get("/search", getEmployeeByLastname);
router.post("/add", newEmployeeValidators, addEmployee);
router.put("/change", editEmployee);
router.delete("/delete", deleteEmployee);




export default router;
