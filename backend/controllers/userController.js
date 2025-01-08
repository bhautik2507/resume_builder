const User = require('../models/User'); // Directly import the whole module
const PDFDocument = require('pdfkit');
const controller = {}
controller.createResume = async (req, res, next) => {
  try {
    const userData = await User.create(req.body);
    return res.send(userData);
  } catch (err) {
    console.error("Error in creating user:", err);
    return res.status(500).send({ error: 'Error creating user' });
  }
}
controller.getResume = async (req, res, next) => {
  try {
    const getResumeData = await User.find({});
    return res.send(getResumeData);
  } catch (err) {
    console.error("Error in creating user:", err);
    return res.status(500).send({ error: 'Error creating user' });
  }
}
controller.getPdffile = async (req, res, next) => {
  try {
    console.log("Request Body ID:", req?.body?.id);
    const getResumeData = await User.findOne({ _id: req?.body?.id });
    console.log("BLACK 🖤💙 ===========>>>>>>>>> ~ file: userController.js:26 ~ controller.getPdffile= ~ getResumeData:", getResumeData)
    if (!getResumeData) {
      return res.status(404).send({ error: 'Resume not found' });
    }
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${getResumeData.firstName}_Resume.pdf`);
    const doc = new PDFDocument();
    doc.pipe(res);
    doc.fontSize(16).text(`Resume for ${getResumeData.firstName} ${getResumeData.lastName}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Email: ${getResumeData.email}`);
    doc.text(`Address: ${getResumeData.address}`);
    doc.text(`Mobile Number: ${getResumeData.mobileNumber}`);
    doc.moveDown();
    doc.fontSize(12).text('Experiences:');
    getResumeData.experiences.forEach((exp, index) => doc.text(`${exp}`));
    doc.moveDown();
    doc.fontSize(12).text('Projects:');
    getResumeData.projects.forEach((proj, index) => doc.text(`${proj}`));
    doc.moveDown();
    doc.fontSize(12).text('Hobbies:');
    getResumeData.hobbies.forEach((hobby, index) => doc.text(`${hobby}`));
    doc.moveDown();
    doc.fontSize(12).text('Social Media:');
    getResumeData.socialMedia.forEach((social, index) => doc.text(`${social}`));
    doc.end();
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  } catch (err) {
    console.error("Error in generating PDF:", err);
    return res.status(500).send({ error: 'Error generating PDF' });
  }
};

module.exports = controller;
