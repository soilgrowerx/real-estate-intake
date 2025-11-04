import jsPDF from 'jspdf';
import { FormData, ClientType } from '../types';

// Helper function to add a key-value pair to the PDF, handling line breaks for long values.
const addField = (doc: jsPDF, x: number, y: number, label: string, value: string | string[] | boolean | undefined, maxWidth: number = 85): number => {
    if (value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
        return y;
    }

    doc.setFont('helvetica', 'bold');
    doc.text(`${label}:`, x, y);
    doc.setFont('helvetica', 'normal');

    let displayValue: string;
    if (typeof value === 'boolean') {
        displayValue = value ? 'Yes' : 'No';
    } else if (Array.isArray(value)) {
        displayValue = value.join(', ');
    } else {
        displayValue = value;
    }
    
    // Split long text to fit within the column
    const lines = doc.splitTextToSize(displayValue, maxWidth);
    doc.text(lines, x + 35, y);
    
    return y + (lines.length * 5) + 4; // Return the y-position for the next field
};


export const generateIntakePDF = (formData: FormData): Promise<Blob> => {
    return new Promise((resolve) => {
        const doc = new jsPDF();
        let yPos = 20;
        const leftMargin = 15;
        const rightColX = 110;
        const sectionSpacing = 12;

        // --- Header ---
        doc.setFontSize(22);
        doc.setTextColor(45, 55, 72); // Dark Gray
        doc.text('New Client Intake Form', leftMargin, yPos);
        yPos += 5;
        doc.setDrawColor(6, 182, 212); // Cyan
        doc.setLineWidth(0.5);
        doc.line(leftMargin, yPos, 195, yPos);
        yPos += sectionSpacing;

        // --- Client Information ---
        doc.setFontSize(16);
        doc.setTextColor(6, 182, 212); // Cyan
        doc.text('Client Information', leftMargin, yPos);
        yPos += 8;

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        yPos = addField(doc, leftMargin, yPos, 'Client Type', formData.clientType);
        yPos = addField(doc, leftMargin, yPos, 'Name', formData.client.name);
        yPos = addField(doc, leftMargin, yPos, 'Email', formData.client.email);
        yPos = addField(doc, leftMargin, yPos, 'Phone', formData.client.phone);
        yPos = addField(doc, leftMargin, yPos, 'Preferred Comms', formData.client.preferredMethod);
        
        if (formData.addCoClient && formData.coClient.name) {
             yPos += 4;
             doc.setFontSize(12);
             doc.setTextColor(45, 55, 72);
             doc.text('Co-Client Information', leftMargin, yPos);
             yPos += 6;
             doc.setFontSize(11);
             doc.setTextColor(0, 0, 0);
             yPos = addField(doc, leftMargin, yPos, 'Name', formData.coClient.name);
             yPos = addField(doc, leftMargin, yPos, 'Email', formData.coClient.email);
             yPos = addField(doc, leftMargin, yPos, 'Phone', formData.coClient.phone);
             yPos = addField(doc, leftMargin, yPos, 'Preferred Comms', formData.coClient.preferredMethod);
        }

        yPos += sectionSpacing - 8;
        doc.setDrawColor(200);
        doc.line(leftMargin, yPos, 195, yPos);
        yPos += sectionSpacing;

        // --- Lead Source ---
        doc.setFontSize(16);
        doc.setTextColor(6, 182, 212);
        doc.text('Lead Source', leftMargin, yPos);
        yPos += 8;
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        yPos = addField(doc, leftMargin, yPos, 'Source Type', formData.leadSource.sourceType);
        yPos = addField(doc, leftMargin, yPos, 'Referring Person', formData.leadSource.referringIndividual);
        yPos = addField(doc, leftMargin, yPos, 'Brokerage', formData.leadSource.referringBrokerage);
        yPos = addField(doc, leftMargin, yPos, 'Referral Fee', formData.leadSource.referralFeePercentage);
        if (formData.leadSource.sendGift) {
            yPos = addField(doc, leftMargin, yPos, 'Send Gift', formData.leadSource.sendGift);
            yPos = addField(doc, leftMargin, yPos, 'Gift Type', formData.leadSource.referralGiftType);
        }

        // --- Seller/Buyer Info ---
        const showSeller = formData.clientType === ClientType.SELLER || formData.clientType === ClientType.BOTH;
        const showBuyer = formData.clientType === ClientType.BUYER || formData.clientType === ClientType.BOTH;

        if (showSeller || showBuyer) {
            yPos += sectionSpacing - 8;
            doc.setDrawColor(200);
            doc.line(leftMargin, yPos, 195, yPos);
            yPos += sectionSpacing;
        }

        if (showSeller) {
            doc.setFontSize(16);
            doc.setTextColor(6, 182, 212);
            doc.text('Seller Information', leftMargin, yPos);
            yPos += 8;
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            let y1 = yPos, y2 = yPos;
            y1 = addField(doc, leftMargin, y1, 'Time Frame', formData.sellerInfo.timeFrame);
            y1 = addField(doc, leftMargin, y1, 'Staging Status', formData.sellerInfo.stagingStatus);
            y1 = addField(doc, leftMargin, y1, 'Est. Live Date', formData.sellerInfo.estLiveDate);
            y1 = addField(doc, leftMargin, y1, 'Photography', formData.sellerInfo.photography);
            if (formData.sellerInfo.photography.includes('Scheduled')) {
              y1 = addField(doc, leftMargin, y1, 'Photo Date', formData.sellerInfo.scheduledPhotographyDate);
            }
            y1 = addField(doc, leftMargin, y1, 'SQ FT', formData.sellerInfo.sqFt);
            y1 = addField(doc, leftMargin, y1, 'RBFCU Rebate', formData.sellerInfo.rbfcuRebate);
            
            y2 = addField(doc, rightColX, y2, 'Title Team', formData.sellerInfo.preferredTitleTeam);
            y2 = addField(doc, rightColX, y2, 'Key Features', formData.sellerInfo.keyHomeFeatures, 75);
            y2 = addField(doc, rightColX, y2, 'Docs Needed', formData.sellerInfo.propertyDocs, 75);
             if (formData.sellerInfo.propertyDocs.includes('Other')) {
              y2 = addField(doc, rightColX, y2, 'Other Docs', formData.sellerInfo.propertyDocsOther, 75);
            }
            y2 = addField(doc, rightColX, y2, 'Showing Info', formData.sellerInfo.showingInstructions, 75);
            y2 = addField(doc, rightColX, y2, 'Notes', formData.sellerInfo.notes, 75);
            yPos = Math.max(y1, y2);
        }

        if (showBuyer) {
            if (showSeller) {
                yPos += sectionSpacing - 8;
                doc.setDrawColor(200);
                doc.line(leftMargin, yPos, 195, yPos);
                yPos += sectionSpacing;
            }
            doc.setFontSize(16);
            doc.setTextColor(6, 182, 212);
            doc.text('Buyer Information', leftMargin, yPos);
            yPos += 8;
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            let y1 = yPos, y2 = yPos;
            y1 = addField(doc, leftMargin, y1, 'Time Frame', formData.buyerInfo.timeFrame);
            y1 = addField(doc, leftMargin, y1, 'Location Type', formData.buyerInfo.locationType);
            y1 = addField(doc, leftMargin, y1, 'Price Point', formData.buyerInfo.pricePoint);
            y1 = addField(doc, leftMargin, y1, 'Preferred Area', formData.buyerInfo.preferredArea);

            y2 = addField(doc, rightColX, y2, 'Close Date', formData.buyerInfo.preferredCloseDate);
            y2 = addField(doc, rightColX, y2, 'Lender', formData.buyerInfo.lender);
            y2 = addField(doc, rightColX, y2, 'Notes', formData.buyerInfo.notes, 75);
            yPos = Math.max(y1, y2);
        }

        resolve(doc.output('blob'));
    });
};