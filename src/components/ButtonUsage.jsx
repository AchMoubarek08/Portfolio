import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  const handleResumeDownload = () => {
    // Use an absolute path to the file in the public folder
    const pdfPath = '/MyMainCV.pdf';
    window.open(pdfPath, '_blank');
  };

  return (
    <button onClick={handleResumeDownload}
    className="btn btn-border-2"
    style={{border:" 4px solid black", color: "black"}}
    type="submit">
      Resume.pdf
  </button>
  );
}
