
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-resume-blue text-white py-8 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ResumeEnhancer</h3>
            <p className="text-gray-300">
              AI-powered resume improvement suggestions to help you land your dream job.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/login" className="text-gray-300 hover:text-white transition-colors">Login</a>
              </li>
              <li>
                <a href="/register" className="text-gray-300 hover:text-white transition-colors">Register</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">support@resumeenhancer.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-300">© {year} ResumeEnhancer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
