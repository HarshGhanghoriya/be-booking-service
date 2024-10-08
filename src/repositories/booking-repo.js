const { ValidationError } = require("sequelize");
const AppError = require("../utils/error/AppError");
const { Booking } = require("../models/index");
const { StatusCodes } = require("http-status-codes");

class BookingRepository {
  async create(payload) {
    try {
      const booking = await Booking.create(payload);
      return booking;
    } catch (error) {
      if ((error.name = "SequelizeValidationError")) {
        throw new ValidationError("ValidationError", error);
      }
      throw new AppError(
        "RepositoryError",
        "Cannot create booking",
        "Not able to create booking. Please try again later",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.export = BookingRepository;
