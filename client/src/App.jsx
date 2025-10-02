import Header from './components/Header';
import Footer from './components/Footer';

export default function App({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
