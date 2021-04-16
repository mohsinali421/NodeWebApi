exports.getAllBootCamp = (req,res) =>{
    res.status(200).json({ success: true, msg: 'All bootcamps'});
}
exports.postBootCamp = (req,res) =>{
    res.status(201).json({ success: true, msg: 'create bootcamps'});
}
exports.putBootCamp = (req,res) =>{
    res.status(201).json({ success: true, msg: `put bootcamps by id as ${req.params.id}`});
}
exports.deleteBootCamp = (req,res) =>{
    res.status(201).json({ success: true, msg: `delete bootcamps by id `});
}