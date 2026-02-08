import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AppointmentForm from "./components/AppointmentForm";
import LearnMore from "./components/LearnMore";
import Layout from "./Layout";
import BookTest from "./components/BookTest";
import PaymentPage from "./components/PaymentPage";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="AppointmentForm" element={<AppointmentForm />} />
        <Route path="BookTest" element={<BookTest />} />
        <Route path="BookTest/payment" element={<PaymentPage />} />
        <Route path="LearnMore" element={<LearnMore />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
