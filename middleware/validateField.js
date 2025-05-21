const validateFields = (fields) => {
    return (req, res, next) => {
      const missingFields = fields.filter((field) => !req.body[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({ message: `Missing fields: ${missingFields.join(', ')}` });
      }
      next();
    };
  };
  
  export default validateFields;
  