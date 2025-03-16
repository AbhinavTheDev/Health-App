import React from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
function Diagnostics() {
    const [userInput, setUserInput] = React.useState('');
    const [diagnosticReport, setDiagnosticReport] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const generateReport = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:5000/api/generate-diagnostic-report', { userInput });
            setDiagnosticReport(response.data);
        } catch (error) {
            console.error(error);
            setDiagnosticReport({ diagnosis: "Error generating report." });
        } finally {
            setIsLoading(false);
        }
    };

    const exportToPDF = () => {
        if (!diagnosticReport) {
            alert("No report to export.");
            return;
        }

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 10;
        const maxWidth = pageWidth - margin * 2;
        
        // Title
        let yPos = margin;
        doc.setFontSize(16);
        doc.text("Diagnostic Report", margin, yPos);
        yPos += 10;
        
        doc.setFontSize(12);
        
        // Function to add text with page breaks
        const addText = (text, yPosition) => {
            // Process text to include numbers in headings (e.g., "1 . Heading" becomes "1. Heading")
            text = text.replace(/(\d+)\s*\.\s*/g, "$1. ");
            
            const lines = doc.splitTextToSize(text, maxWidth);
            
            for (let i = 0; i < lines.length; i++) {
                // Check if we need a new page
                if (yPosition > pageHeight - margin) {
                    doc.addPage();
                    yPosition = margin;
                }
                
                doc.text(lines[i], margin, yPosition);
                yPosition += 7; // Line height
            }
            
            return yPosition + 5; // Return the new position with some extra spacing
        };
        
        // Diagnosis
        doc.setFont(undefined, 'bold');
        yPos = addText("Diagnosis:", yPos);
        doc.setFont(undefined, 'normal');
        yPos = addText(diagnosticReport.diagnosis, yPos);
        
        // Medication Suggestions
        doc.setFont(undefined, 'bold');
        yPos = addText("Medication Suggestions:", yPos);
        doc.setFont(undefined, 'normal');
        yPos = addText(diagnosticReport.furtherDetails || "None provided", yPos);
        
        // Additional Notes
        doc.setFont(undefined, 'bold');
        yPos = addText("Additional Notes:", yPos);
        doc.setFont(undefined, 'normal');
        yPos = addText(diagnosticReport.additional_notes || "None provided", yPos);
        
        doc.save("diagnostic_report.pdf");
    };

    const loaderStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    };
    
    const spinnerStyles = {
        width: '60px',
        height: '60px',
        border: '5px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        borderTop: '5px solid #fff',
        animation: 'spin 1s linear infinite'
    };

    // Function to process text for rendering in HTML
    const processTextForHTML = (text) => {
        if (!text) return '';
        return text
            .replace(/(\d+)\s*\.\s*/g, "$1. ") // Format numbers in headings
            .replace(/\*\*\*(.*?)\*\*\*/g, '<strong>$1</strong>') // Handle bold text
            .replace(/\n{2,}/g, '\n') // Replace multiple consecutive newlines with a single one
            .replace(/\n/g, '<br/>'); // Replace single newlines with <br/>
    };

    return (
        <div>
            {isLoading && (
                <div style={loaderStyles}>
                    <div style={{textAlign: 'center', color: 'white'}}>
                        <div style={spinnerStyles}></div>
                        <p style={{marginTop: '20px'}}>Generating diagnostic report...</p>
                    </div>
                </div>
            )}
            
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .markdown-content {
                        white-space: pre-wrap;
                        line-height: 1.5;
                        margin-bottom: 20px;
                    }
                    .markdown-content p {
                        margin-bottom: 10px;
                    }
                `}
            </style>
            <Navbar />
            <h2>Diagnostic Report Generator</h2>
            <textarea
                placeholder="Enter your symptoms or medical records"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={generateReport}>Generate Report</button>

            {diagnosticReport && (
                <div>
                    <h3>Diagnostic Report</h3>
                    <p><strong>Diagnosis:</strong></p> 
                    <div className="markdown-content" 
                         dangerouslySetInnerHTML={{ __html: processTextForHTML(diagnosticReport.diagnosis) }} />
                    
                    <p><strong>Medication Suggestions:</strong></p> 
                    <div className="markdown-content" 
                         dangerouslySetInnerHTML={{ __html: processTextForHTML(diagnosticReport.furtherDetails) || 'None provided' }} />
                    
                    <p><strong>Additional Notes:</strong></p> 
                    <div className="markdown-content" 
                         dangerouslySetInnerHTML={{ __html: processTextForHTML(diagnosticReport.additional_notes) || 'None provided' }} />
                    
                    <button onClick={exportToPDF}>Export to PDF</button>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Diagnostics;
