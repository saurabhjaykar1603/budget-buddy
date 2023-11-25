const responder = ({ res, success, message, data }) => {
  return res.json({
    success,
    message,
    data,
  });
};

export { responder };
