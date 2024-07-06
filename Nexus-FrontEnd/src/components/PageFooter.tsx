import '../style/PageFooter.css';
function PageFooter() {
    return (
        <footer className="bg-gradient-to-r from-zinc-900 to-stone-950  py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-wrap">
                {/* About Us */}
                <div className="footer-section w-full md:w-1/6 px-2">
                    <h3 className="text-lg font-bold mb-2 text-white">About Us</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400 ">About WebTech</li>
                        <li className="text-gray-400">Mission & Values</li>
                        <li className="text-gray-400">Our Team</li>
                        <li className="text-gray-400">Careers</li>
                        <li className="text-gray-400">Blogs</li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-section w-full md:w-1/6 px-2">
                    <h3 className="text-lg font-bold mb-2 text-white">Services</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">Software Development</li>
                        <li className="text-gray-400">IT Consulting</li>
                        <li className="text-gray-400">Web Design</li>
                        <li className="text-gray-400">Digital Transformation</li>
                        <li className="text-gray-400">Project Management</li>
                    </ul>
                </div>

                {/* Solutions */}
                <div className="footer-section w-full md:w-1/6 px-2">
                    <h3 className="text-lg font-bold mb-2 text-white">Solutions</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">Industry Solutions</li>
                        <li className="text-gray-400">Custom Solutions</li>
                        <li className="text-gray-400">Client Success</li>
                        <li className="text-gray-400">Case Studies</li>
                        <li className="text-gray-400">Testimonials</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="footer-section w-full md:w-1/6 px-2">
                    <h3 className="text-lg font-bold mb-2 text-white">Resources</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">Blog</li>
                        <li className="text-gray-400">Support</li>
                        <li className="text-gray-400">Webinars</li>
                        <li className="text-gray-400">Knowledge Base</li>
                        <li className="text-gray-400">FAQs</li>
                    </ul>
                </div>

                <div className="footer-section w-full md:w-1/6 px-2">
                    <h3 className="text-lg font-bold mb-2 text-white">Contact us</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">Get in Touch</li>
                        <li className="text-gray-400">Support</li>
                        <li className="text-gray-400">Sales</li>
                        <li className="text-gray-400">Locations</li>
                        <li className="text-gray-400">Contact Form</li>
                    </ul>
                </div>

                <div className="footer-section w-full md:w-1/6 px-2">
                    <h3 className="text-lg font-bold mb-2 text-white">Connect</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">Newsletter</li>
                        <li className="text-gray-400">Social Media</li>
                        <li className="text-gray-400">Events</li>
                        <li className="text-gray-400">Partnership</li>
                        <li className="text-gray-400">Community Involvement</li>
                    </ul>
                </div>
            </div>
            <br />
            <br /><br />
            <hr></hr>
            {/* Bottom Section */}
            <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <p className="text-center text-zinc-50">&copy; 2024 NEXUS. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default PageFooter;
