import { expect, test } from "vitest";
import { Appointment } from "./appointment.js";

test("create an appointment", () => {
 const startsAt = new Date();
 const endsAt = new Date();

 endsAt.setDate(endsAt.getDate() + 1);
 const appointment = new Appointment({
  customer: "John Doe",
  startsAt,
  endsAt,
 });

 expect(appointment).toBeInstanceOf(Appointment);
});

test("cannot create an appointment with end date more then start date", () => {
 const startsAt = new Date();
 const endsAt = new Date();

 endsAt.setDate(endsAt.getDate() - 1);

 expect(() => {
  return new Appointment({
   customer: "John Doe",
   startsAt,
   endsAt,
  });
 }).toThrow();
});
