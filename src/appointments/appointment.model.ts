import { PatientModel } from '../patients/patient.model';

export class AppointmentModel {
  user: PatientModel;
  procedure: string;
  preporation: string;
  price: number;
  date: string;
  time: string;
}
