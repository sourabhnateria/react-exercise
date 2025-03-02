import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const updateForm = (data) => setFormData((prev) => ({ ...prev, ...data }));

  return (
    <FormContext.Provider value={{ formData, step, nextStep, prevStep, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => useContext(FormContext);

const Step1 = () => {
  const { formData, updateForm, nextStep } = useFormContext();
  return (
    <div>
      <h2>Step 1: Personal Details</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => updateForm({ name: e.target.value })}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

const Step2 = () => {
  const { formData, updateForm, nextStep, prevStep } = useFormContext();
  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

const Step3 = () => {
  const { formData, updateForm, prevStep } = useFormContext();
  return (
    <div>
      <h2>Step 3: Security</h2>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => updateForm({ password: e.target.value })}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>Submit</button>
    </div>
  );
};

const MultiStepForm = () => {
  const { step } = useFormContext();
  return (
    <div>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </div>
  );
};

const App = () => {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
};

export default App;
