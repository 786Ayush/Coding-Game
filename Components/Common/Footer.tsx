export default function Footer() {
    return (
        <footer className="bg-zinc-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Codedynamos. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li>
                        <a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}