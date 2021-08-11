
export const DEV_ENV = process.env.NODE_ENV === "development";

const PRODUCTION_URL = "http://trychomedical.pl";
const DEV_URL = "http://localhost:3000";

const SERVER_PRODUCTION_URL = "http://backend.trychomedical.pl";
const SERVER_DEV_URL = "http://localhost:5000";

export const BASE_URL = DEV_ENV ? DEV_URL : PRODUCTION_URL;
export const SERVER_BASE_URL = DEV_ENV ? SERVER_DEV_URL : SERVER_PRODUCTION_URL;
export const POLICY_BASE_URL = "http://policy.trychomedical.pl";

export const BASE_API_URL = `${SERVER_BASE_URL}/api`;