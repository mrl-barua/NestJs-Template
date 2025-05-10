export class Proponent {
    id: number;
    proponentId: string;
    departmentId?: number;
    officeId?: number;
    proponentType: 'Insider' | 'Outsider';
    proponentStatus: 'Pending' | 'Approved' | 'Rejected';
    fullName: string;
    email: string;
    password: string;
    isDeleted: number;
    createdAt?: Date;
  }
  