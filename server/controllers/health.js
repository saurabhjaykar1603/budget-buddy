const getApiHealth = async (req, res) => {
  res.json({
    success: true,
    message: "status OK",
  });
};

export { getApiHealth };
