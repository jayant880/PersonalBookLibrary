import BookForm from "./components/BookForm"
import BookView from "./components/BookView"
import Header from "./components/Header"
import BookProvider from "./Context/BookProvider"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-indigo-200">
      <BookProvider>
        <Header />
        <div className="flex gap-3 m-3 p-3">
          <BookForm />
          <BookView />
        </div>
      </BookProvider>
    </div>
  )
}

export default App