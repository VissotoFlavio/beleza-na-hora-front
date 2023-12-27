export type ProfessionalStatus = 'online' | 'offline' | 'busy';
export interface ProfessionalModel {
  id: string;
  firstName: string;
  lastName: string;
  rating: number;
  specialty: string;
  imageUrl: string;
  status: ProfessionalStatus;
}
