export type EndpointProps = {
  [key: string]: {
    [key: string]: string | ((...args: (string | number)[]) => string);
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";

// export const resolveEndpoint = (
//   endpoint: StaticOrDynamicEndpoint,
//   ...args: (string | number)[]
// ): string => {
//   return typeof endpoint === "function" ? endpoint(...args) : endpoint;
// };

export const APIS: EndpointProps = {
  AUTH: {
    BASE: `${BASE_URL}/auth`,
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
    LOGOUT: `${BASE_URL}/auth/logout`,
    VERIFY_EMAIL: `${BASE_URL}/auth/verify-email`,
    REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`,
    FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
    RESET_PASSWORD: `${BASE_URL}/auth/reset-password`,
  },
  OAUTH2: {
    GOOGLE: `${BASE_URL}/oauth2/authorization/google`,
    GITHUB: `${BASE_URL}/oauth2/authorization/github`,
  },
  USER: {
    BASE: `${BASE_URL}/user`,
    INFORMATION: `${BASE_URL}/user/information`,
    GET_ALL: `${BASE_URL}/user/all`,
    PROFILE: `${BASE_URL}/user/profile`,
    UPDATE: `${BASE_URL}/user/update`,
    DETAIL: (id: string | number): string => `${BASE_URL}/user/${id}`,
  },
  PRODUCT: {
    BASE: `${BASE_URL}/product`,
    LIST: `${BASE_URL}/product/list`,
    DETAIL: (id: string | number): string => `${BASE_URL}/product/${id}`,
  },
  ORDER: {
    BASE: `${BASE_URL}/order`,
    CREATE: `${BASE_URL}/order/create`,
    DETAIL: (id: string | number): string => `${BASE_URL}/order/${id}`,
  },
  PAYMENT: {
    BASE: `${BASE_URL}/payment`,
  },
  NOTIFICATION: {
    BASE: `${BASE_URL}/notification`,
  },
  REPORT: {
    BASE: `${BASE_URL}/report`,
  },
};
