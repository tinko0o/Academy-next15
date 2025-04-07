export type User = {
  // id?: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  bio?: string;
};

export type Instructor = User & {
  rating: number;
  numberStudent: number;
  numberCourse: number;
};
