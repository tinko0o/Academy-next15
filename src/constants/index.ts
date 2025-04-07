import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from "./forms";

import { HOME_PAGE_MENU, MenuProps } from "./menu";
import { testimonialProps, TESTIMONIES_DATA } from "./testimonials";

type GroupleConstantsProps = {
  HomePageMenu: MenuProps[];
  signUpForm: AuthFormProps[];
  signInForm: AuthFormProps[];
  testimonial: testimonialProps[];
};

export const GROUPLE_CONSTANTS: GroupleConstantsProps = {
  HomePageMenu: HOME_PAGE_MENU,
  signUpForm: SIGN_UP_FORM,
  signInForm: SIGN_IN_FORM,
  // fakedata
  testimonial: TESTIMONIES_DATA,
};
