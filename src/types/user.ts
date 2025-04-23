export type User = {
  id: number;
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  avatar?: string;
  bio?: string;
};

export type Instructor = User & {
  job_title: string;
  initials?: string;
};
