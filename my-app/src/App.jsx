import RegistrationForm from "./Lab/experiment9/RegistrationForm";

function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Experiment 09 */}
      <div style={{ marginBottom: "40px", backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <h1 style={{ borderBottom: "3px solid #2196F3", paddingBottom: "10px" }}>Experiment 9 - Registration Form</h1>
        <div style={{ marginTop: "20px" }}>
          <RegistrationForm/>
        </div>
      </div>
    </div>
  );
}

export default App;