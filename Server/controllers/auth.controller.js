export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (name & email & password) {
    try{


        return res.json({ success: true });
    }
    catch(error){
        return res.json({success:false, message: error.message})
    }
    
  }

  return res.json({ success: false, message: "Missing Details" });
};
