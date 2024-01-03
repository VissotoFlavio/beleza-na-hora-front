import { ProfessionalStatus } from './status.professiona.model';

export interface SubCategoriesProfessionalDetails {
  id: string;
  name: string;
  numberOfServices: number;
  rating: number;
  price: number;
  imageUrl: string;
}

export interface CategoriesProfessionalDetails {
  id: string;
  name: string;
  subCategories: SubCategoriesProfessionalDetails[];
}

export interface ProfessionalDetailsModel {
  id: string;
  firstName: string;
  lastName: string;
  rating: number;
  specialty: string;
  status: ProfessionalStatus;
  imageUrl: string;
  description: string;
  numberOfServices: number;
  workingSince: number;
  categories: CategoriesProfessionalDetails[];
}
