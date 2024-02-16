import { BookForm } from "./components/book-form";

function App() {
  return (
    <div className="min-h-screen  bg-banner  bg-fixed bg-center bg-cover flex font-poppins md:p-[5rem]">
      <div className="bg-gray-50 w-full md:w-[50%] p-[2rem] md:rounded-3xl md:mx-auto">
        <BookForm />
      </div>
    </div>
  );
}

export default App;
