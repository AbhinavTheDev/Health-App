import React from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

function Diagnostics() {
    const [userInput, setUserInput] = React.useState('');
    const [diagnosticReport, setDiagnosticReport] = React.useState(null);

    const generateReport = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/generate-diagnostic-report', { userInput });
            setDiagnosticReport(response.data);
        } catch (error) {
            console.error(error);
            setDiagnosticReport({ diagnosis: "Error generating report." });
        }
    };

    const exportToPDF = () => {
        if (!diagnosticReport) {
            alert("No report to export.");
            return;
        }

        const doc = new jsPDF();
        doc.text("Diagnostic Report", 10, 10);
        doc.text(`Diagnosis: ${diagnosticReport.diagnosis}`, 10, 30);
        doc.text(`Medication Suggestions: ${diagnosticReport.medication_suggestions}`, 10, 50);
        doc.text(`Additional Notes: ${diagnosticReport.additional_notes}`, 10, 70);
        doc.save("diagnostic_report.pdf");
    };

    return (
        <div>
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
                    <p><strong>Diagnosis:</strong> {diagnosticReport.diagnosis}</p>
                    <p><strong>Medication Suggestions:</strong> {diagnosticReport.medication_suggestions}</p>
                    <p><strong>Additional Notes:</strong> {diagnosticReport.additional_notes}</p>
                    <button onClick={exportToPDF}>Export to PDF</button>
                </div>
            )}
        </div>
    );
}

export default Diagnostics;
