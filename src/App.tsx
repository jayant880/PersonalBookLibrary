import BookForm from "./components/BookForm"
import BookView from "./components/BookView"
import BookProvider from "./Context/BookProvider"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-indigo-200">
      <BookProvider>
        <BookForm />
        <BookView />
      </BookProvider>
    </div>
  )
}

export default App