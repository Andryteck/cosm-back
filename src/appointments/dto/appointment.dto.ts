import { PatientDto } from '../../patients/dto/patient.dto';

export class AppointmentDto {
  user: PatientDto;
  procedure: string;
  preporation: string;
  price: number;
  date: string;
  time: string;
}
