import { createContext, useContext, useState } from "react";

const MedicationContext = createContext();

export function MedicationProvider({ children }) {
const [medications, setMedications] = useState([]);

const addMedication = (med) =>
setMedications([...medications, { ...med, id: Date.now() }]);

const removeMedication = (id) =>
setMedications(medications.filter((m) => m.id !== id));

return (
<MedicationContext.Provider
value={{ medications, addMedication, removeMedication }}>
{children}
</MedicationContext.Provider>
);
}

export const useMedication = () => useContext(MedicationContext);
