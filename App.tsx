import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';
import FormCheckbox from './components/FormCheckbox';
import FormTextArea from './components/FormTextArea';
import FloatingMicButton from './components/FloatingMicButton';
import StatusBar from './components/StatusBar';
import { processTranscriptWithAI } from './utils/ai';
import { submitDataToBackend } from './utils/backend';
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
  PropertyDocsOptions,
} from './types';
import { deepMerge } from './utils/deepMerge';
import { formatPhoneNumber } from './utils/formatPhoneNumber';
import { debounce } from './utils/debounce';


// Speech Recognition Setup
const SpeechRecognitionImpl = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const isSpeechRecognitionSupported = !!SpeechRecognitionImpl;


// Initial state for the form
const initialState: FormData = {
  clientType: '',
  client: { name: '', email: '', phone: '', preferredMethod: '' },
  addCoClient: false,
  coClient: { name: '', email: '', phone: '', preferredMethod: '' },
  leadSource: {
    sourceType: '',
    referringIndividual: '',
    referringBrokerage: '',
    referralFeePercentage: '',
    sendGift: false,
    referralGiftType: '',
  },
  sellerInfo: {
    timeFrame: '',
    stagingStatus: '',
    estLiveDate: '',
    photography: [],
    scheduledPhotographyDate: '',
    keyHomeFeatures: '',
    sqFt: '',
    propertyDocs: [],
    propertyDocsOther: '',
    showingInstructions: '',
    rbfcuRebate: false,
    preferredTitleTeam: '',
    notes: '',
  },
  buyerInfo: {
    timeFrame: '',
    locationType: '',
    pricePoint: '',
    preferredArea: '',
    preferredCloseDate: '',
    lender: '',
    notes: '',
  },
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isRecording, setIsRecording] = useState(false);
  const [status, setStatus] = useState('Click the mic to start capturing info.');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  const recognitionRef = useRef<any | null>(null);
  const finalTranscriptRef = useRef<string>('');


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    
    if (name === 'client.phone' || name === 'coClient.phone') {
      value = formatPhoneNumber(value);
    }

    const keys = name.split('.');

    if (keys.length === 1) {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => {
        const newState = JSON.parse(JSON.stringify(prev)); // Deep copy
        let currentLevel: any = newState;
        for (let i = 0; i < keys.length - 1; i++) {
          currentLevel = currentLevel[keys[i]];
        }
        currentLevel[keys[keys.length - 1]] = value;
        return newState;
      });
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const keys = name.split('.');

     if (keys.length === 1) {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => {
        const newState = JSON.parse(JSON.stringify(prev));
        let currentLevel: any = newState;
        for (let i = 0; i < keys.length - 1; i++) {
          currentLevel = currentLevel[keys[i]];
        }
        currentLevel[keys[keys.length - 1]] = checked;
        return newState;
      });
    }
  };

  const handleMultiCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      setFormData(prev => {
          const currentDocs = prev.sellerInfo.propertyDocs;
          const newDocs = checked 
              ? [...currentDocs, value]
              : currentDocs.filter(doc => doc !== value);
          return {
              ...prev,
              sellerInfo: {
                  ...prev.sellerInfo,
                  propertyDocs: newDocs
              }
          }
      })
  }

  const handlePhotographyCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      setFormData(prev => {
          const currentPhotos = prev.sellerInfo.photography;
          const newPhotos = checked 
              ? [...currentPhotos, value]
              : currentPhotos.filter(status => status !== value);
          return {
              ...prev,
              sellerInfo: {
                  ...prev.sellerInfo,
                  photography: newPhotos
              }
          }
      })
  }

  const debouncedProcessTranscript = useCallback(
    debounce(async (transcript: string) => {
      if (!transcript) return;
      
      setStatus('Processing...');
      setError(null);
      try {
        const aiData = await processTranscriptWithAI(transcript);
        
        if (aiData.client?.phone) {
          aiData.client.phone = formatPhoneNumber(aiData.client.phone);
        }
        if (aiData.coClient?.phone) {
          aiData.coClient.phone = formatPhoneNumber(aiData.coClient.phone);
        }

        setFormData(prev => deepMerge(prev, aiData));
        setStatus('Updated! Listening for more...');
      } catch (err) {
        console.error(err);
        setError('Could not process the audio. Please try again.');
        setStatus('Error processing. Listening again.');
      }
    }, 2000),
    []
  );

  useEffect(() => {
    if (!isSpeechRecognitionSupported) {
      setStatus('Voice input not supported in your browser.');
      return;
    }

    if (isRecording) {
      if (!recognitionRef.current) {
        recognitionRef.current = new SpeechRecognitionImpl();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onstart = () => {
            setStatus('Listening...');
            finalTranscriptRef.current = '';
        };

        recognitionRef.current.onresult = (event: any) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    const finalChunk = event.results[i][0].transcript.trim() + '. ';
                    finalTranscriptRef.current += finalChunk;
                    debouncedProcessTranscript(finalTranscriptRef.current);
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            setStatus(`Hearing: "${interimTranscript}"`);
        };

        recognitionRef.current.onend = () => {
            if (isRecording) {
                setIsRecording(false);
                setStatus('Recording stopped.');
            }
        };
        
        recognitionRef.current.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            setError(`Error: ${event.error}`);
            setStatus('An error occurred.');
            setIsRecording(false);
        };
      }
      recognitionRef.current.start();

    } else { 
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            recognitionRef.current = null;
            setStatus('Click the mic to start capturing info.');
        }
    }

    return () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };
  }, [isRecording, debouncedProcessTranscript]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('Submitting...');
    setError(null);

    try {
      setSubmitStatus('Sending data to services...');
      await submitDataToBackend(formData);
      
      setSubmitStatus('Submission successful!');
      alert('Form submitted successfully! The data has been sent to Google Sheets, emailed, and a PDF was saved to Google Drive.');
      setFormData(initialState); 

    } catch (error) {
        console.error('Submission failed:', error);
        setError('An error occurred during submission. Please try again.');
        setSubmitStatus('Submission failed.');
        alert(`Submission failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('');
        }, 3000)
    }
  };
  
  const showSellerSection = formData.clientType === ClientType.SELLER || formData.clientType === ClientType.BOTH;
  const showBuyerSection = formData.clientType === ClientType.BUYER || formData.clientType === ClientType.BOTH;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="max-w-4xl mx-auto p-4 md:p-8 pb-48">
        <form onSubmit={handleSubmit}>
          {/* Client Type Selector */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">
              What is the client type?
            </h2>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
              {(Object.values(ClientType)).map(type => (
                <label key={type} className="flex items-center space-x-3 text-lg cursor-pointer">
                  <input
                    type="radio"
                    name="clientType"
                    value={type}
                    checked={formData.clientType === type}
                    onChange={handleInputChange}
                    className="h-5 w-5 bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-600"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {formData.clientType && (
            <div className="animate-fade-in">
              <Section title="Client Information">
                <FormInput label="Name" name="client.name" value={formData.client.name} onChange={handleInputChange} required />
                <FormInput label="Email" name="client.email" type="email" value={formData.client.email} onChange={handleInputChange} required />
                <FormInput label="Phone" name="client.phone" type="tel" value={formData.client.phone} onChange={handleInputChange} required maxLength={14} />
                <FormSelect label="Preferred Method of Communication" name="client.preferredMethod" value={formData.client.preferredMethod} onChange={handleInputChange} options={Object.values(CommunicationMethod)} required />
                <div className="md:col-span-2 pt-4 border-t border-gray-700">
                    <FormCheckbox label="Add a Co-Client?" name="addCoClient" checked={formData.addCoClient} onChange={handleCheckboxChange} />
                </div>
              </Section>
              
              {formData.addCoClient && (
                  <div className="animate-fade-in">
                    <Section title="Co-Client Information">
                        <FormInput label="Name" name="coClient.name" value={formData.coClient.name} onChange={handleInputChange} />
                        <FormInput label="Email" name="coClient.email" type="email" value={formData.coClient.email} onChange={handleInputChange} />
                        <FormInput label="Phone" name="coClient.phone" type="tel" value={formData.coClient.phone} onChange={handleInputChange} maxLength={14} />
                        <FormSelect label="Preferred Method of Communication" name="coClient.preferredMethod" value={formData.coClient.preferredMethod} onChange={handleInputChange} options={Object.values(CommunicationMethod)} />
                    </Section>
                  </div>
              )}

              <Section title="Lead Source">
                <FormSelect label="Source Type" name="leadSource.sourceType" value={formData.leadSource.sourceType} onChange={handleInputChange} options={Object.values(LeadSourceType)} />
                <FormInput label="Referring Individual" name="leadSource.referringIndividual" value={formData.leadSource.referringIndividual} onChange={handleInputChange} />
                <FormInput label="Referring Brokerage" name="leadSource.referringBrokerage" value={formData.leadSource.referringBrokerage} onChange={handleInputChange} />
                <FormInput label="Referral Fee %" name="leadSource.referralFeePercentage" value={formData.leadSource.referralFeePercentage} onChange={handleInputChange} />
                <div className="flex flex-col sm:items-start md:col-span-2">
                    <FormCheckbox label="Send Gift?" name="leadSource.sendGift" checked={formData.leadSource.sendGift} onChange={handleCheckboxChange} className="mb-4" />
                    {formData.leadSource.sendGift && <FormInput label="Referral Gift Type" name="leadSource.referralGiftType" value={formData.leadSource.referralGiftType} onChange={handleInputChange} className="w-full animate-fade-in" />}
                </div>
              </Section>

              {showSellerSection && (
                <div className="animate-fade-in">
                  <Section title="Seller Information">
                    <FormSelect label="Time Frame" name="sellerInfo.timeFrame" value={formData.sellerInfo.timeFrame} onChange={handleInputChange} options={Object.values(SellerTimeFrame)} />
                    <FormSelect label="Staging Status" name="sellerInfo.stagingStatus" value={formData.sellerInfo.stagingStatus} onChange={handleInputChange} options={Object.values(StagingStatus)} />
                    <FormInput label="Est 'Live' Date" name="sellerInfo.estLiveDate" type="date" value={formData.sellerInfo.estLiveDate} onChange={handleInputChange} />
                     <div className="md:col-span-2">
                        <label className="mb-2 font-semibold text-gray-300 block">Photography</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                           {Object.values(PhotographyStatus).map(status => (
                                <FormCheckbox key={status} label={status} name="sellerInfo.photography" value={status} checked={formData.sellerInfo.photography.includes(status)} onChange={handlePhotographyCheckboxChange} />
                            ))}
                        </div>
                        {formData.sellerInfo.photography.includes(PhotographyStatus.SCHEDULED) && (
                            <div className="mt-4 animate-fade-in">
                                <FormInput label="Scheduled Photography Date" name="sellerInfo.scheduledPhotographyDate" type="date" value={formData.sellerInfo.scheduledPhotographyDate} onChange={handleInputChange} />
                            </div>
                        )}
                    </div>
                    <FormTextArea label="Key Home Features" name="sellerInfo.keyHomeFeatures" value={formData.sellerInfo.keyHomeFeatures} onChange={handleInputChange} />
                    <FormInput label="SQ FT (any discrepancies?)" name="sellerInfo.sqFt" value={formData.sellerInfo.sqFt} onChange={handleInputChange} />
                    
                    <div className="md:col-span-2">
                        <label className="mb-2 font-semibold text-gray-300 block">Property Specific Docs Needed</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
                            {PropertyDocsOptions.map(doc => (
                                <FormCheckbox key={doc} label={doc} name="sellerInfo.propertyDocs" value={doc} checked={formData.sellerInfo.propertyDocs.includes(doc)} onChange={handleMultiCheckboxChange} />
                            ))}
                        </div>
                         {formData.sellerInfo.propertyDocs.includes('Other') && (
                            <div className="mt-4 animate-fade-in">
                                <FormInput 
                                    label="Other Docs (please specify)" 
                                    name="sellerInfo.propertyDocsOther" 
                                    value={formData.sellerInfo.propertyDocsOther} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                        )}
                    </div>
                    <FormTextArea label="Showing Instructions" name="sellerInfo.showingInstructions" value={formData.sellerInfo.showingInstructions} onChange={handleInputChange} />
                    <FormInput label="Preferred Title Team" name="sellerInfo.preferredTitleTeam" value={formData.sellerInfo.preferredTitleTeam} onChange={handleInputChange} />
                    <div className="pt-2 md:col-span-2">
                        <FormCheckbox label="RBFCU Rebate?" name="sellerInfo.rbfcuRebate" checked={formData.sellerInfo.rbfcuRebate} onChange={handleCheckboxChange} />
                    </div>
                    <FormTextArea label="Seller Notes" name="sellerInfo.notes" value={formData.sellerInfo.notes} onChange={handleInputChange} />
                  </Section>
                </div>
              )}

              {showBuyerSection && (
                 <div className="animate-fade-in">
                  <Section title="Buyer Information">
                    <FormSelect label="Time Frame" name="buyerInfo.timeFrame" value={formData.buyerInfo.timeFrame} onChange={handleInputChange} options={Object.values(BuyerTimeFrame)} />
                    <FormSelect label="Local or Relo?" name="buyerInfo.locationType" value={formData.buyerInfo.locationType} onChange={handleInputChange} options={Object.values(LocationType)} />
                    <FormInput label="Price Point" name="buyerInfo.pricePoint" value={formData.buyerInfo.pricePoint} onChange={handleInputChange} placeholder="$500k - $600k" />
                    <FormInput label="Preferred Area" name="buyerInfo.preferredArea" value={formData.buyerInfo.preferredArea} onChange={handleInputChange} />
                    <FormInput label="Preferred Close Date" name="buyerInfo.preferredCloseDate" type="date" value={formData.buyerInfo.preferredCloseDate} onChange={handleInputChange} />
                    <FormInput label="Lender" name="buyerInfo.lender" value={formData.buyerInfo.lender} onChange={handleInputChange} />
                    <FormTextArea label="Buyer Notes" name="buyerInfo.notes" value={formData.buyerInfo.notes} onChange={handleInputChange} />
                  </Section>
                </div>
              )}
            </div>
          )}
          {formData.clientType && (
            <footer className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-4 z-10">
                {(isRecording || isSubmitting) && <StatusBar status={isSubmitting ? submitStatus : status} error={error}/>}
                <div className="max-w-4xl mx-auto pt-4 border-t border-gray-700">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-lg shadow-cyan-500/50 shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {submitStatus}
                            </>
                        ) : (
                            'Submit Intake Form'
                        )}
                    </button>
                </div>
            </footer>
          )}
        </form>
      </main>

       <FloatingMicButton 
          onClick={() => setIsRecording(prev => !prev)} 
          isRecording={isRecording}
       />
      
    </div>
  );
};

export default App;