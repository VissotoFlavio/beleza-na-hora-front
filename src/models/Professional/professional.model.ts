import { ProfessionalStatus } from './status.professiona.model';

export interface ProfessionalModel {
  id: string;
  firstName: string;
  lastName: string;
  rating: number;
  specialty: string;
  imageUrl: string;
  status: ProfessionalStatus;
}
