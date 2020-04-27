const omit = (obj, ...properties) => {
  properties.forEach(property => {
    delete obj[property];
  });
  return obj;
};

module.exports = omit;
