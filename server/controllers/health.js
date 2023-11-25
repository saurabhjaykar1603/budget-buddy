import { responder } from "./../utils.js";

const getApiHealth = async (req, res) => {
  return responder({ res, success: true, message: "status ok" });
};

export { getApiHealth };
