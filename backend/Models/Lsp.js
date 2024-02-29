const mongoose = require("mongoose");

const lspSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    role: String,
    password: String,
    phoneno: String,
    fileid: String,
    idno: String,
    licenseno: String,
    isverified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Lsp = mongoose.model("LegalSP", lspSchema);

module.exports = Lsp;
