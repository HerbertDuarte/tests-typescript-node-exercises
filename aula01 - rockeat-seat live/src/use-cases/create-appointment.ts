import { Appointment } from "../entities/appointment.js";

interface CreateAppointmentRequest {
 customer: string;
 startsAt: Date;
 endsAt: Date;
}
interface CreateAppointmentResponse extends Appointment {}

export class CreateAppointment {
 async execute({
  customer,
  startsAt,
  endsAt,
 }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
  const appointment = new Appointment({
   customer,
   endsAt,
   startsAt,
  });

  return appointment;
 }
}
