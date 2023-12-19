// FileUtils.js
const fs = require("fs");
const PDFParser = require("pdf-parse");
const mammoth = require("mammoth");

export async function readAndExtractFile(file) {
  try {
    const fileBuffer = await readFileAsBuffer(file);
    const fileType = getFileType(file);

    if (fileType === "pdf") {
      return extractTextFromPDF(fileBuffer);
    } else if (fileType === "docx") {
      return extractTextFromDOCX(fileBuffer);
    } else {
      throw new Error("Unsupported file type");
    }
  } catch (error) {
    console.error("Error reading and extracting file:", error);
    return null;
  }
}

async function readFileAsBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Error reading file"));

    reader.readAsArrayBuffer(file);
  });
}

function getFileType(file) {
  const fileName = file.name.toLowerCase();
  if (fileName.endsWith(".pdf")) {
    return "pdf";
  } else if (fileName.endsWith(".docx")) {
    return "docx";
  } else {
    throw new Error("Unsupported file type");
  }
}

async function extractTextFromPDF(fileBuffer) {
  const data = await PDFParser(new Uint8Array(fileBuffer));
  return data.text;
}

async function extractTextFromDOCX(fileBuffer) {
  const result = await mammoth.extractRawText({
    arrayBuffer: new Uint8Array(fileBuffer),
  });
  return result.value;
}
