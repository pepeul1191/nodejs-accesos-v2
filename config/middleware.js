const demo = function (request, reply) {
  console.log("middleware demo");
  return reply.continue();
};

exports.demo= demo;
