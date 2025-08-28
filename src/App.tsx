import BookForm from "./components/BookForm"
import BookView from "./components/BookView"
import Header from "./components/Header"
import BookProvider from "./Context/BookProvider"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <BookProvider>
        <Header />
        <main className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BookForm />
            <BookView />
          </div>
        </main>
      </BookProvider>
    </div>
  )
}

export default App