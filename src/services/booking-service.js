const BookingRepository = require("../repositories/booking-repo");
const ServiceError = require("../utils/error/ServiceError");

class BookingService {
  constructor() {
    this.BookingRepository = new BookingRepository();
  }

  async createBooking(payload) {
    try {
      const booking = await this.BookingRepository.create(payload);
      return booking;
    } catch (e) {
        throw new ServiceError()
    }
  }
}
