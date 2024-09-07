export interface Provider {
  preferredFullName: string;
  firstName: string;
  lastName: string;
  unid: string;
  degrees: string;
  starRatingTotal: string;
  media: string;
  specialties: Specialty[];
  locations: Location[];
  licenses: License[];
  path: string;
}

export interface Specialty {
  name: string;
  specialty_id: string;
}

export interface Location {
  name: string;
  search_building_name: string;
  building_id: string;
  clinic_id: string;
}

export interface License {
  description: string;
  status: string;
  state: string | null;
  certificate_id: string;
}