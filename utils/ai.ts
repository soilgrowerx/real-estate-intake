import { GoogleGenAI, Type } from "@google/genai";
import { 
    FormData, 
    ClientType,
    CommunicationMethod,
    LeadSourceType,
    SellerTimeFrame,
    StagingStatus,
    PhotographyStatus,
    BuyerTimeFrame,
    LocationType,
    PropertyDocsOptions
} from '../types';

const ai = new GoogleGenAI({ apiKey: 'VITE_API_KEY_PLACEHOLDER' as string });

// Defines the expected JSON structure for the AI's response.
// This complete schema ensures the AI knows about every possible field it can populate.
const responseSchema = {
    type: Type.OBJECT,
    properties: {
        clientType: { type: Type.STRING, enum: Object.values(ClientType), description: "Client's role: Seller, Buyer, or Both." },
        client: {
            type: Type.OBJECT,
            description: "Primary client's contact information.",
            properties: {
                name: { type: Type.STRING, description: "Full name." },
                email: { type: Type.STRING, description: "Email address." },
                phone: { type: Type.STRING, description: "Phone number." },
                preferredMethod: { type: Type.STRING, enum: Object.values(CommunicationMethod), description: "Client's preferred contact method." },
            }
        },
        addCoClient: { type: Type.BOOLEAN, description: "Set to true if a co-client is mentioned." },
        coClient: {
            type: Type.OBJECT,
            description: "Co-client's contact information, if applicable.",
            properties: {
                name: { type: Type.STRING, description: "Full name." },
                email: { type: Type.STRING, description: "Email address." },
                phone: { type: Type.STRING, description: "Phone number." },
                preferredMethod: { type: Type.STRING, enum: Object.values(CommunicationMethod), description: "Co-client's preferred contact method." },
            }
        },
        leadSource: {
             type: Type.OBJECT,
             description: "Information about where the client lead came from.",
             properties: {
                sourceType: { type: Type.STRING, enum: Object.values(LeadSourceType), description: "The origin of the lead." },
                referringIndividual: { type: Type.STRING, description: "Name of the person who referred this client." },
                referringBrokerage: { type: Type.STRING, description: "Brokerage of the referring person." },
                referralFeePercentage: { type: Type.STRING, description: "Any referral fee percentage discussed." },
                sendGift: { type: Type.BOOLEAN, description: "Set to true if sending a referral gift was mentioned." },
                referralGiftType: { type: Type.STRING, description: "The type of gift to send, if mentioned." },
             }
        },
        sellerInfo: {
            type: Type.OBJECT,
            description: "Details related to the client selling a property.",
            properties: {
                timeFrame: { type: Type.STRING, enum: Object.values(SellerTimeFrame), description: "How soon the client wants to sell." },
                stagingStatus: { type: Type.STRING, enum: Object.values(StagingStatus), description: "Current staging status of the property." },
                estLiveDate: { type: Type.STRING, description: "Estimated date for the property to go 'live' on the market (YYYY-MM-DD format)." },
                photography: { type: Type.ARRAY, description: "Status of property photography. Can be multiple values.", items: { type: Type.STRING, enum: Object.values(PhotographyStatus)} },
                scheduledPhotographyDate: { type: Type.STRING, description: "Date scheduled for photography (YYYY-MM-DD format), if applicable." },
                keyHomeFeatures: { type: Type.STRING, description: "A summary of the home's key features." },
                sqFt: { type: Type.STRING, description: "Square footage of the property." },
                propertyDocs: { type: Type.ARRAY, description: "A list of property-specific documents that are needed.", items: { type: Type.STRING, enum: PropertyDocsOptions } },
                propertyDocsOther: { type: Type.STRING, description: "If 'Other' is mentioned for property docs, specify the details here." },
                showingInstructions: { type: Type.STRING, description: "Instructions for showing the property to potential buyers." },
                rbfcuRebate: { type: Type.BOOLEAN, description: "Set to true if an RBFCU rebate is applicable." },
                preferredTitleTeam: { type: Type.STRING, description: "The client's preferred title team (free text)." },
                notes: { type: Type.STRING, description: "General notes about the seller or property." },
            }
        },
        buyerInfo: {
            type: Type.OBJECT,
            description: "Details related to the client buying a property.",
            properties: {
                timeFrame: { type: Type.STRING, enum: Object.values(BuyerTimeFrame), description: "How soon the client wants to buy." },
                locationType: { type: Type.STRING, enum: Object.values(LocationType), description: "Is the client local or relocating?" },
                pricePoint: { type: Type.STRING, description: "Client's budget or price range, e.g., '$500k - $600k'." },
                preferredArea: { type: Type.STRING, description: "Specific areas, neighborhoods, or cities the client is interested in." },
                preferredCloseDate: { type: Type.STRING, description: "Ideal closing date for the purchase (YYYY-MM-DD format)." },
                lender: { type: Type.STRING, description: "The name of the lender the client is working with, if any." },
                notes: { type: Type.STRING, description: "General notes about the buyer's needs." },
            }
        },
    },
};


export const processTranscriptWithAI = async (transcript: string): Promise<Partial<FormData>> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemma-3n-4b',
            contents: `You are a flawless, expert real estate assistant AI. Your goal is to listen to a conversation with a client and fill out an intake form with perfect accuracy. Below is a transcript of the conversation so far. Analyze the ENTIRE transcript and extract every possible piece of information that fits into the provided JSON schema. Be meticulous. Map conversational phrases to the correct schema values (e.g., 'sometime in the next month' should be '< 30 Days'). Pay close attention to the 'clientType'. If the client is 'Both' a seller and a buyer, be sure to extract and populate fields in *both* the 'sellerInfo' and 'buyerInfo' objects from the conversation. Do not miss any details. If a piece of information is mentioned, you must capture it. Do not invent information. Omit fields that are not mentioned.\n\nTranscript:\n${transcript}`,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            },
        });

        if (!response.text) {
            throw new Error("The AI response was empty.");
        }

        const jsonText = response.text.trim();
        const parsedData = JSON.parse(jsonText);

        // Clean up empty objects that the AI might return
        const cleanedData = Object.entries(parsedData).reduce((acc, [key, value]) => {
            if (value !== null && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
                // Do not include empty objects
            } else {
                (acc as any)[key] = value;
            }
            return acc;
        }, {} as Partial<FormData>);

        return cleanedData;

    } catch (error) {
        console.error("Error processing transcript with AI:", error);
        throw new Error("Failed to parse transcript. The AI response may have been invalid.");
    }
};