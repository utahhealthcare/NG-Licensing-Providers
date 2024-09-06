export interface Provider {
  preferredFullName: Value[];
  licenseCertificateList: CertificateList;
  specialtyList: Specialties[];
}

interface Value {
  value: string;
}

interface CertificateList {
  licensesCertificates: Certificate[];
}

interface Certificate {
  licenseDescription: string;
  licenseState: string;
  licenseCertificateId: string;
}

interface Specialties {
  specialtyId: string;
  specialtyTitle: string;
}