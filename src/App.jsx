import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Catigorytest_Create from "./components/Categorytest/create";
import Catigorytest_Edit from "./components/Categorytest/Edit";
import Catigorytest_Index from "./components/Categorytest/Index";
import Courses_Create from "./components/Courses/Create";
import Courses_Edit from "./components/Courses/Edit";
import Courses_index from "./components/Courses/Index";
import Question_Create from "./components/Question/Create";
import Question_Edit from "./components/Question/Edit";
import Question_Index from "./components/Question/Index";
import Questionimg_Create from "./components/Questionimg/Create";
import Questionimg_Index from "./components/Questionimg/Index";
import MainLayout from "./Layouts/MainLayout";
import Students from "./components/Students/Students";
import Results from "./components/Results/Results";
import Contact from "./components/Contact/index"
import Login from "./components/Auth/Login/Login";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import Questionimg_Edit from "./components/Questionimg/Edit";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route
            path="Catigorytest_Create"
            element={<Catigorytest_Create />}
          />
          <Route
            path="Catigorytest_Edit/:id"
            element={<Catigorytest_Edit />}
          />
          <Route path="Catigorytest_Index" element={<Catigorytest_Index />} />
          <Route path="Courses_Create" element={<Courses_Create />} />
          <Route path="Courses_Edit/:id" element={<Courses_Edit />} />
          <Route path="Courses_index" element={<Courses_index />} />
          <Route path="Question_Create" element={<Question_Create />} />
          <Route path="Question_Edit/:id" element={<Question_Edit />} />
          <Route path="Question_Index" element={<Question_Index />} />
          <Route path="Questionimg_Create" element={<Questionimg_Create />} />
          <Route path="Questionimg_Edit/:id" element={<Questionimg_Edit />} />
          <Route path="Questionimg_Index" element={<Questionimg_Index />} />
          <Route path="students" element={<Students />} />
          <Route path="result" element={<Results />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
