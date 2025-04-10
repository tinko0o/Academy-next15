import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from "./forms";

import { HOME_PAGE_MENU, MenuProps } from "./menu";
import { testimonialProps, TESTIMONIES_DATA } from "./testimonials";
import { APIS, EndpointProps } from "./endpoint";

type GroupleConstantsProps = {
  HomePageMenu: MenuProps[];
  signUpForm: AuthFormProps[];
  signInForm: AuthFormProps[];
  testimonial: testimonialProps[];
  api: EndpointProps;
};

export const CONSTANTS: GroupleConstantsProps = {
  HomePageMenu: HOME_PAGE_MENU,
  signUpForm: SIGN_UP_FORM,
  signInForm: SIGN_IN_FORM,
  api: APIS,
  // fakedata
  testimonial: TESTIMONIES_DATA,
};
