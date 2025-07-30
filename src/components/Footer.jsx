export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      </div>
    </footer>
  );
}