const generic = {
  dev: {
    url_protocol: 'https',
    api_domain: 'api.punkapi.com',
    prefix: 'v2'
  }
};

const getEnv = () => {
  let env = process.env.REACT_APP_API_URL_ENV || process.env.NODE_ENV;
  env = env === 'development' ? 'dev' : env;
  return env;
};

const main = generic[getEnv() || 'dev'];

export const HOST = {
  API: {
    URL: `${main.url_protocol}://${main.api_domain}`,
    API_PREFIX: main.prefix
  }
};
