const ENDPOINT = 'https://course-api.school.csssr.com';

const responseStatus = {
  OK: 'OK',
  ERROR: 'ERROR'
};

const request = async (url, options = null) => {
  try {
    const response = await fetch(`${ENDPOINT}${url}`, options);
    const data = await response.json();

    if (data.result === responseStatus.OK) {
      return data;
    }

    return Promise.reject(data);
  } catch(err) {
    return Promise.reject(err);
  }
};

export default request;
