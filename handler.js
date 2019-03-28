const axios = require('axios');
const jsontoxml = require('js2xmlparser');

module.exports.hello = async event => {
  const { data } = await axios.get(
    'https://projects.fivethirtyeight.com/march-madness-api/2019/madness.json'
  );

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/xml'
    },
    body: jsontoxml.parse('data', data)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
