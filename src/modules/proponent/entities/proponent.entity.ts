export class Proponent {
    id: number;
    proponentId: string | null;
    departmentId?: number | null;
    officeId?: number | null;
    proponentType: 'Insider' | 'Outsider';
    proponentStatus: 'Pending' | 'Approved' | 'Rejected';
    fullName: string | null;
    email: string | null;
    password: string;
    isDeleted: Boolean ;
    createdAt?: Date;
  }
  