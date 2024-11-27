import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  const handleResumeDownload = () => {
    // Use an absolute path to the file in the public folder
    const pdfPath = '/MyMainCV.pdf';
    window.open(pdfPath, '_blank');
  };

  return (
    <Button
      style={{ backgroundColor: "#3f2834" }}
      variant="contained"
      onClick={handleResumeDownload}
    >
      Resume.pdf
    </Button>
  );
}
